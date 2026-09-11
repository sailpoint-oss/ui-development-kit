import { createHash, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { dialog, shell } from "electron";
import { getTokenDetails, parseJwt } from "./auth";
import { getConfigEnvironment, getSecureValue, setSecureValue } from "./config";
import type { RefreshResponse, TokenSet } from "./types";

/**
 * Public OAuth client registered for the SailPoint developer tools. A public
 * client holds no secret, so it must use PKCE (RFC 7636).
 */
export const OAUTH_CLIENT_ID = "sailapps";

/**
 * Static page that displays the authorization code for the user to copy. The
 * page never receives a token and never calls an API, so no SailPoint-operated
 * service handles the authorization code or the PKCE verifier.
 */
export const OAUTH_REDIRECT_URI = "http://developer.sailpoint.com/sailapps";

/** Prefix and version of the value the redirect page produces. */
const PASTE_CODE_PREFIX = "sp1.";
const PASTE_CODE_VERSION = 1;

/** How long the user has to finish sign-in, in milliseconds. */
const OAUTH_SESSION_LIFETIME_MS = 10 * 60 * 1000;

/**
 * The active sign-in attempt. The PKCE verifier stays in the main process and
 * never reaches the renderer process or the disk.
 */
let currentOAuthSession: {
    id: string;
    baseURL: string;
    tokenEndpoint: string;
    state: string;
    codeVerifier: string;
    expiresAt: number;
} | null = null;

/**
 * Parses a URL and rejects it unless it is a plain HTTPS URL. The host itself is
 * not restricted, because a tenant can use a vanity domain.
 * @param rawURL - The URL to check
 * @param label - Name of the value, used in the error message
 * @returns The parsed URL
 */
export function assertHttpsUrl(rawURL: string, label: string): URL {
    let parsed: URL;
    try {
        parsed = new URL(rawURL.trim());
    } catch {
        throw new Error(`${label} is not a valid URL`);
    }

    if (parsed.protocol !== "https:") {
        throw new Error(`${label} must use HTTPS`);
    }
    if (!parsed.hostname) {
        throw new Error(`${label} has no host`);
    }
    if (parsed.username || parsed.password) {
        throw new Error(`${label} must not include credentials`);
    }
    if (parsed.hash) {
        throw new Error(`${label} must not include a fragment`);
    }

    return parsed;
}

function toBase64Url(value: Buffer): string {
    return value.toString("base64url");
}

/** Returns the S256 PKCE challenge for a verifier (RFC 7636). */
function codeChallenge(verifier: string): string {
    return toBase64Url(createHash("sha256").update(verifier).digest());
}

/**
 * Returns the short code that the application and the redirect page both show.
 * The user compares the two values before pasting the one-time code.
 */
export function confirmationCodeFromState(state: string): string {
    if (!state || state.length < 8) {
        return "";
    }
    return `${state.slice(0, 4)}-${state.slice(4, 8)}`;
}

/**
 * Reads the authorize endpoint from {baseURL}/oauth/info.
 *
 * The token endpoint is not taken from this document. The authorization code
 * and the PKCE verifier always go to the tenant URL from configuration, so a
 * discovery response can never move them to another host.
 */
async function discoverAuthorizeEndpoint(baseURL: string): Promise<string> {
    const response = await fetch(`${baseURL}/oauth/info`, { redirect: "manual" });
    if (!response.ok) {
        throw new Error(`Tenant OAuth information returned status ${response.status}`);
    }

    const info = await response.json() as { authorizeEndpoint?: string };
    if (!info.authorizeEndpoint) {
        throw new Error("Tenant OAuth information is missing the authorize endpoint");
    }

    assertHttpsUrl(info.authorizeEndpoint, "Authorize endpoint");

    return info.authorizeEndpoint;
}

/**
 * Unpacks the value the user copied from the redirect page and verifies that
 * its state matches the state this application sent.
 * @param pasted - The value the user pasted
 * @param expectedState - The state sent in the authorization request
 * @returns The authorization code
 */
export function parsePasteCode(pasted: string, expectedState: string): string {
    const trimmed = (pasted || "").trim();
    if (!trimmed) {
        throw new Error("No code was entered");
    }
    if (!trimmed.startsWith(PASTE_CODE_PREFIX)) {
        throw new Error(`The code must start with "${PASTE_CODE_PREFIX}", so it did not come from the SailPoint sign-in page`);
    }

    let payload: { v?: number, code?: string, state?: string };
    try {
        const decoded = Buffer.from(trimmed.slice(PASTE_CODE_PREFIX.length), "base64url").toString("utf8");
        payload = JSON.parse(decoded);
    } catch {
        throw new Error("The code is damaged, so copy it again");
    }

    if (payload.v !== PASTE_CODE_VERSION) {
        throw new Error(`The code uses version ${payload.v}, so update this application`);
    }
    if (!payload.code) {
        throw new Error("The code is missing the authorization code");
    }

    const received = Buffer.from(payload.state || "", "utf8");
    const expected = Buffer.from(expectedState, "utf8");
    if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
        throw new Error("The code belongs to a different sign-in attempt, so start again");
    }

    return payload.code;
}

/**
 * Posts a form to the tenant token endpoint. The client authenticates with its
 * client ID only, because the client is public.
 */
async function requestToken(tokenEndpoint: string, form: URLSearchParams): Promise<RefreshResponse> {
    form.set("client_id", OAUTH_CLIENT_ID);

    const response = await fetch(tokenEndpoint, {
        method: "POST",
        redirect: "manual",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
    });

    const body = await response.text();
    if (!response.ok) {
        throw new Error(`Token request failed with status ${response.status}: ${body.trim()}`);
    }

    let tokenData: RefreshResponse;
    try {
        tokenData = JSON.parse(body) as RefreshResponse;
    } catch {
        throw new Error("Failed to decode the token response");
    }

    if (!tokenData.access_token) {
        throw new Error("No access token in the token response");
    }
    if (!tokenData.refresh_token) {
        throw new Error("No refresh token in the token response");
    }

    return tokenData;
}

/** Clears the active sign-in attempt from memory. */
export function clearOAuthSession(uuid?: string): void {
    if (!currentOAuthSession) {
        return;
    }

    if (!uuid || currentOAuthSession.id === uuid) {
        console.log('Clearing OAuth session from memory');
        currentOAuthSession = null;
    }
}

/** Returns the expiry of the active sign-in attempt, in epoch seconds. */
export function getOAuthSessionTtl(uuid: string): number | undefined {
    if (!currentOAuthSession || currentOAuthSession.id !== uuid) {
        return undefined;
    }

    return Math.floor(currentOAuthSession.expiresAt / 1000);
}

/**
* Retrieves stored OAuth tokens for a given environment
* @param environment - The environment name to retrieve tokens for
* @returns Promise resolving to stored OAuth tokens or undefined if not found
*/
export function getStoredOAuthTokens(environment: string): TokenSet | undefined {
    try {
        const accessToken = getSecureValue('environments.oauth.accesstoken', environment);
        const accessExpiry = getSecureValue('environments.oauth.expiry', environment);
        const refreshToken = getSecureValue('environments.oauth.refreshtoken', environment);
        const refreshExpiry = getSecureValue('environments.oauth.refreshexpiry', environment);

        if (!accessToken || !accessExpiry || !refreshToken || !refreshExpiry) {
            return undefined;
        }

        return {
            accessToken,
            accessExpiry: new Date(accessExpiry),
            refreshToken,
            refreshExpiry: new Date(refreshExpiry),
        };
    } catch (error) {
        console.error('Error retrieving OAuth tokens:', error);
        throw error;
    }
}

/**
 * Stores OAuth tokens securely for a given environment
 * @param environment - The environment name to store tokens for
 * @param tokenSet - The token set to store
 */
export function storeOAuthTokens(environment: string, tokenSet: TokenSet): void {
    console.log('Storing OAuth tokens for environment:', environment);
    if (!tokenSet.refreshToken || !tokenSet.refreshExpiry) {
        throw new Error('Invalid token set, missing refresh token or expiry');
    }

    try {
        setSecureValue('environments.oauth.accesstoken', environment, tokenSet.accessToken);
        setSecureValue('environments.oauth.expiry', environment, tokenSet.accessExpiry.toISOString());
        setSecureValue('environments.oauth.refreshtoken', environment, tokenSet.refreshToken);
        setSecureValue('environments.oauth.refreshexpiry', environment, tokenSet.refreshExpiry.toISOString());

        console.log(`OAuth tokens stored for environment: ${environment}`);
    } catch (error) {
        console.error('Error storing OAuth tokens:', error);
        throw error;
    }
}

/**
* Validates OAuth tokens for a given environment
* @param environment - The environment name to validate OAuth tokens for
* @returns Promise resolving to token validation result
*/
export function validateOAuthTokens(environment: string) {
    try {
        const storedTokens = getStoredOAuthTokens(environment);
        if (!storedTokens) {
            return { isValid: false, needsRefresh: false };
        }

        if (!storedTokens.refreshToken || !storedTokens.refreshExpiry) {
            return { isValid: false, needsRefresh: false };
        }

        const now = new Date();

        // Check if refresh token is expired, the refresh token should always be the last thing to expire, so if its expired, we need a whole new OAuth session
        const refreshTokenDetails = getTokenDetails(storedTokens.refreshToken);
        if (refreshTokenDetails.expiry < now) {
            console.log('OAuth refresh token is expired');
            return { isValid: false, needsRefresh: false, tokenDetails: refreshTokenDetails };
        }

        // Check if access token is expired or will expire soon (within 5 minutes)
        const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000);
        const accessTokenDetails = getTokenDetails(storedTokens.accessToken);
        if (accessTokenDetails.expiry <= fiveMinutesFromNow) {
            console.log('OAuth access token is expired or expiring soon, needs refresh');
            return {
                isValid: false,
                needsRefresh: true,
                tokenDetails: accessTokenDetails
            };
        }

        return { isValid: true, needsRefresh: false, tokenDetails: accessTokenDetails };
    } catch (error) {
        console.error('Error validating OAuth tokens:', error);
        return { isValid: false, needsRefresh: false };
    }
}

/**
 * Starts the OAuth 2.0 authorization code flow with PKCE and opens the browser.
 * The browser sends the authorization code to a static SailPoint page, and the
 * user copies it back into this application.
 * @param baseAPIUrl - The tenant API base URL
 * @returns The session id, the authorization URL, and the confirmation code
 */
export const OAuthLogin = async ({ baseAPIUrl }: { tenant: string, baseAPIUrl: string, environment: string }): Promise<{ success: boolean, error?: string, uuid?: string, authUrl?: string, ttl?: number, confirmationCode?: string }> => {
    try {
        const baseParsed = assertHttpsUrl((baseAPIUrl || "").replace(/\/+$/, ""), "Tenant API URL");
        const baseURL = baseParsed.origin;
        const tokenEndpoint = `${baseURL}/oauth/token`;

        const authorizeEndpoint = await discoverAuthorizeEndpoint(baseURL);

        const codeVerifier = toBase64Url(randomBytes(32));
        const state = toBase64Url(randomBytes(32));
        const id = randomUUID();

        currentOAuthSession = {
            id,
            baseURL,
            tokenEndpoint,
            state,
            codeVerifier,
            expiresAt: Date.now() + OAUTH_SESSION_LIFETIME_MS,
        };

        const authURL = new URL(authorizeEndpoint);
        authURL.searchParams.set("client_id", OAUTH_CLIENT_ID);
        authURL.searchParams.set("response_type", "code");
        authURL.searchParams.set("redirect_uri", OAUTH_REDIRECT_URI);
        authURL.searchParams.set("state", state);
        authURL.searchParams.set("code_challenge", codeChallenge(codeVerifier));
        authURL.searchParams.set("code_challenge_method", "S256");

        console.log('Attempting to open browser for authentication');
        try {
            await shell.openExternal(authURL.toString());
        } catch {
            void dialog.showMessageBox({
                title: 'OAuth Login',
                message: 'Please manually open the OAuth login page below',
                detail: authURL.toString(),
                buttons: ['OK']
            });
            console.warn('Cannot open browser automatically. Please manually open OAuth login page below');
        }

        return {
            success: true,
            uuid: id,
            authUrl: authURL.toString(),
            ttl: Math.floor(currentOAuthSession.expiresAt / 1000),
            confirmationCode: confirmationCodeFromState(state),
        };
    } catch (error) {
        clearOAuthSession();
        console.error('OAuth login error:', error);
        return { success: false, error: 'OAuth login failed: ' + (error instanceof Error ? error.message : String(error)) };
    }
};

/**
 * Finishes the sign-in started by OAuthLogin. The code the user pasted is
 * exchanged for a token directly with the tenant.
 * @param uuid - The session id returned by OAuthLogin
 * @param pastedCode - The one-time code the user copied from the browser
 * @returns The token response from the tenant
 */
export const completeOAuthLogin = async (uuid: string, pastedCode: string): Promise<RefreshResponse> => {
    const session = currentOAuthSession;
    if (!session || session.id !== uuid) {
        throw new Error('No sign-in attempt is waiting for a code');
    }
    if (Date.now() >= session.expiresAt) {
        clearOAuthSession(uuid);
        throw new Error('OAuth authentication timed out');
    }

    // The verifier is used once. Take it out of memory before the exchange so a
    // second attempt cannot reuse it.
    const { state, codeVerifier, tokenEndpoint } = session;
    const authorizationCode = parsePasteCode(pastedCode, state);
    clearOAuthSession(uuid);

    const form = new URLSearchParams();
    form.set("grant_type", "authorization_code");
    form.set("code", authorizationCode);
    form.set("redirect_uri", OAUTH_REDIRECT_URI);
    form.set("code_verifier", codeVerifier);

    return requestToken(tokenEndpoint, form);
};

/**
 * Refreshes OAuth tokens for a given environment using the stored refresh token
 * @param environment - The environment name to refresh tokens for
 */
export const refreshOAuthToken = async (environment: string): Promise<void> => {
    try {
        console.log(`Refreshing OAuth token for environment: ${environment}`);

        const envConfig = getConfigEnvironment(environment);
        if (!envConfig.baseurl) {
            throw new Error('Environment configuration not found');
        }

        const storedTokens = getStoredOAuthTokens(environment);
        if (!storedTokens) {
            throw new Error('No stored OAuth tokens found for environment');
        }
        if (!storedTokens.refreshToken) {
            throw new Error('No refresh token found for environment');
        }

        const baseParsed = assertHttpsUrl(envConfig.baseurl.replace(/\/+$/, ""), "Tenant API URL");

        const form = new URLSearchParams();
        form.set("grant_type", "refresh_token");
        form.set("refresh_token", storedTokens.refreshToken);

        const refreshData = await requestToken(`${baseParsed.origin}/oauth/token`, form);

        const accessTokenClaims = parseJwt(refreshData.access_token);
        const refreshTokenClaims = parseJwt(refreshData.refresh_token);

        storeOAuthTokens(environment, {
            accessToken: refreshData.access_token,
            accessExpiry: new Date(accessTokenClaims.exp * 1000),
            refreshToken: refreshData.refresh_token,
            refreshExpiry: new Date(refreshTokenClaims.exp * 1000),
        });

        console.log('OAuth token refresh successful');
    } catch (error) {
        console.error('Error refreshing OAuth token:', error);
        throw error;
    }
};
