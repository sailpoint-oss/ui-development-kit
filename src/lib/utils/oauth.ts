import type { Cookies } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { decrypt, encrypt } from '$lib/encryption';

export function generateAuthLink(tenantUrl: string) {
	return `${tenantUrl}/oauth/authorize?client_id=sailpoint-cli&response_type=code&redirect_uri=http://localhost:3000/callback`;
}

export function generateLogoutLink(tenantUrl: string) {
	return `${tenantUrl}/logout`;
}

export type Session = {
	baseUrl: string;
	tenantUrl: string;
};

export type IdnSession = {
	access_token: string;
	refresh_token: string;
	claims_supported: string;
	expires_in: string;
	identity_id: string;
	internal: string;
	jti: string;
	org: string;
	pod: string;
	scope: string;
	strong_auth: string;
	strong_auth_supported: string;
	tenant_id: string;
	token_type: string;
};

export type TokenDetails = {
	tenant_id: string;
	internal: boolean;
	pod: string;
	org: string;
	identity_id: string;
	user_name: string;
	strong_auth: boolean;
	force_auth_supported: boolean;
	active: boolean;
	authorities: string[];
	client_id: string;
	encoded_scope: string[];
	strong_auth_supported: boolean;
	claims_supported: boolean;
	scope: string[];
	exp: number;
	jti: string;
};

export function lastCheckedToken(cookies: Cookies): string | undefined {
	const lastCheckedToken = cookies.get('lastCheckedToken');
	if (!lastCheckedToken) {
		return undefined;
	}
	return decrypt(lastCheckedToken);
}

export function getTokenDetails(cookies: Cookies): TokenDetails | undefined {
	const tokenDetailsString = cookies.get('tokenDetails');
	if (!tokenDetailsString) {
		return undefined;
	}
	const decryptedTokenDetails = decrypt(tokenDetailsString);
	if (!decryptedTokenDetails) {
		return undefined;
	}
	return JSON.parse(decryptedTokenDetails) as TokenDetails;
}

export function setTokenDetails(cookies: Cookies, tokenDetails: TokenDetails) {
	cookies.set('tokenDetails', encrypt(JSON.stringify(tokenDetails)), {
		path: '/'
	});
}

export async function checkToken(apiUrl: string, token: string): Promise<TokenDetails | undefined> {
	const body = 'token=' + token;
	const url = `${apiUrl}/oauth/check_token/`;
		const resp = await axios.post(url, body).catch(function (err) {
			if (err.response) {
				// Request made and server responded
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
			}
			return undefined;
		})
		if (resp && resp.data) {
			return resp.data;
		} else {
			return undefined;
		}
}

export async function refreshToken(
	apiUrl: string,
	refreshToken: string
): Promise<IdnSession | undefined> {
	const url = `${apiUrl}/oauth/token?grant_type=refresh_token&client_id=sailpoint-cli&refresh_token=${refreshToken}`;
	const resp = await axios.post(url).catch(function (err) {
		if (err.response) {
			console.log(
				'Error refreshing token',
				err.response.data,
				err.response.status,
				err.response.headers
			);
		}
		return undefined;
	})
	if (resp && resp.data) {
		return resp.data as IdnSession;
	} else {
		return undefined;
	}


}

export async function logout(cookies: Cookies) {
	cookies.delete('session', {
		path: '/'
	});

	cookies.delete('idnSession', {
		path: '/'
	});
}

export function getSession(cookies: Cookies): Session | undefined {
	const sessionString = cookies.get('session');
	if (!sessionString) return undefined;
	const decryptedSession = decrypt(sessionString);
	if (!decryptedSession) return undefined;
	return JSON.parse(decryptedSession) as Session;
}

export async function getToken(cookies: Cookies): Promise<IdnSession | undefined> {
	const session: Session = getSession(cookies);
	const idnSessionString = cookies.get('idnSession');

	if (!idnSessionString) {
		console.log('IdnSession does not exist, returning undefined...');
		return undefined;
		// redirect(302, generateAuthLink(session.tenantUrl));
	}

	const decrytedIdnSession = decrypt(idnSessionString);
	if (!decrytedIdnSession) {
		console.log('IdnSession cannot be decrypted, returning undefined...');
		return undefined;
		// redirect(302, generateAuthLink(session.tenantUrl));
	}
	const idnSession: IdnSession = JSON.parse(decrytedIdnSession);

	if (
		idnSession &&
		session &&
		!session.baseUrl.toLowerCase().includes(idnSession.org.toLowerCase())
	) {
		console.log('IdnSession does not match session, returning undefined...');
		redirect(302, generateAuthLink(session.tenantUrl));
	}

	if (isJwtExpired(idnSession.access_token)) {
		console.log('Refreshing IdnSession token...');
		const newSession = await refreshToken(session.baseUrl, idnSession.refresh_token);
		if (newSession) {
			cookies.set('idnSession', encrypt(JSON.stringify(newSession)), {
				path: '/'
			});
			return Promise.resolve(newSession);
		} else {
			console.log('IdnSession token is expired');
			return Promise.resolve(undefined);
		}
	} else {
		console.log('IdnSession token is good');
		return Promise.resolve(idnSession);
	}
}

function isJwtExpired(token: string): boolean {
	try {
		const decodedToken = jwt.decode(token, { complete: true });
		if (
			!decodedToken ||
			!decodedToken.payload ||
			typeof decodedToken.payload === 'string' ||
			!decodedToken.payload.exp
		) {
			// The token is missing the expiration claim ('exp') or is not a valid JWT.
			return true; // Treat as expired for safety.
		}

		// Get the expiration timestamp from the token.
		const expirationTimestamp = decodedToken.payload.exp;

		// Get the current timestamp.
		const currentTimestamp = Math.floor(Date.now() / 1000);

		// Check if the token has expired.
		return currentTimestamp >= expirationTimestamp;
	} catch (error) {
		// An error occurred during decoding.
		return true; // Treat as expired for safety.
	}
}
