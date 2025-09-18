import {
  Configuration,
  TenantV2024Api,
  ConfigurationParameters,
} from 'sailpoint-api-client';
import { getConfig, setConfig,  getConfigEnvironment, setActiveEnvironementInConfig, getSecureValue} from './config';
import { getStoredOAuthTokens, OAuthLogin, refreshOAuthToken, validateOAuthTokens, storeOAuthTokens, authLambdaTokenURL, consumePrivateKey} from './oauth';
import { getStoredPATTokens, refreshPATToken, validatePATToken } from './pat';
import { decryptToken } from "./crypto";
import { TokenSet, TokenResponse } from './types';
import { ref } from 'process';

export function formatErrorAsString(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error) ?? 'Unknown error';
}

export let apiConfig: Configuration;
let activeEnvironment: string | null = null;
let refreshActive = false;

export const disconnectFromISC = () => {
  try {
    // Simply clear the API configuration
    apiConfig = undefined as unknown as Configuration;

    console.log('Successfully disconnected from ISC');
  } catch (error) {
    console.error('Error during disconnect:', error);
    // Ensure apiConfig is cleared even if there's an error
    apiConfig = undefined as unknown as Configuration;
  }
};

export type AuthPayload = {
  tenant_id: string;
  pod: string;
  org: string;
  identity_id: string;
  user_name: string;
  strong_auth: boolean;
  authorities: string[];
  client_id: string;
  strong_auth_supported: boolean;
  scope: string[];
  exp: number;
  jti: string;
};

export function parseJwt(token: string): AuthPayload {

  // Split the JWT token into its three parts
  const parts = token.split('.');

  // Take the first part
  const base64Url = parts[1];

  // Convert it from base64url to base64
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  // Decode the base64 string
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  // Return the parsed JSON payload
  return JSON.parse(jsonPayload) as AuthPayload;
}

/**
 * Unified login function that handles both flows
 * @param request - The login request
 * @returns Promise resolving to the login result
 */
export const unifiedLogin = async (environment: string): Promise<{ success: boolean, error?: string, uuid?: string, authUrl?: string }> => {


  try {
    activeEnvironment = environment;
    // First, ensure the environment exists in config
    const { tenanturl, baseurl, authtype } = getConfigEnvironment(environment);

    // Check for existing tokens and attempt refresh if needed
    const tokenStatus = validateTokens(environment);

    if (!tokenStatus) {
      return {
        success: false,
        error: `No tokens found for environment: ${environment}`
      };
    }

    if (tokenStatus.authtype === authtype) {
      if (tokenStatus.isValid) {
        console.log(`Using existing valid ${tokenStatus.authtype} tokens for environment: ${environment}`);

        // Test the connection with existing tokens
        let storedTokens;

        switch (tokenStatus.authtype) {
          case 'oauth':
            storedTokens = getStoredOAuthTokens(environment);
            break;

          case 'pat':
            storedTokens = getStoredPATTokens(environment);
            break;

          default:
            return {
              success: false,
              error: 'Unsupported auth type: ' + tokenStatus.authtype
            }
        }

        if (!storedTokens) {
          return {
            success: false,
            error: `No tokens found for environment: ${environment}`
          };
        }

        let connectionResult;

        switch (tokenStatus.authtype) {
          case 'oauth':
            connectionResult = await connectToISCWithToken(
              baseurl,
              storedTokens.accessToken,
            );
            break;
          case 'pat':
            connectionResult = await connectToISCWithPAT(
              baseurl,
              storedTokens.clientId,
              storedTokens.clientSecret,
            );
            break;
        }

        if (connectionResult && connectionResult.connected) {
          return {
            success: true,
          };
        } else {
          return {
            success: false,
            error: `Failed to connect to ISC with environment: ${environment} and auth type: ${tokenStatus.authtype}`
          };
        }

      } else if (tokenStatus.needsRefresh) {
        // Attempt to refresh tokens using cached refresh token
        console.log(`Attempting to refresh expired tokens for environment: ${environment}`);
        try {
          const refreshResult = await refreshTokens();

          if (!refreshResult.success) {
            return {
              success: false,
              error: formatErrorAsString(refreshResult.error)
            };
          }

          let connectionResult;
          switch (tokenStatus.authtype) {
            case 'oauth':
              const oauthTokens = getStoredOAuthTokens(environment);
              if (!oauthTokens || !oauthTokens.accessToken) {
                return {
                  success: false,
                  error: 'No OAuth tokens found for environment: ' + environment
                };
              }
              connectionResult = await connectToISCWithToken(baseurl, oauthTokens.accessToken);
              break;
            case 'pat':
              const patTokens = getStoredPATTokens(environment);
              if (!patTokens || !patTokens.clientId || !patTokens.clientSecret) {
                return {
                  success: false,
                  error: 'No PAT tokens found for environment: ' + environment
                };
              }
              connectionResult = await connectToISCWithPAT(baseurl, patTokens.clientId, patTokens.clientSecret);
              break;
          }

          if (connectionResult && connectionResult.connected) {
            console.log('Successfully refreshed tokens and connected');
            return {
              success: true,
            };
          } else {
            return {
              success: false,
              error: 'Failed to connect to ISC with environment: ' + environment + ' and auth type: ' + tokenStatus.authtype
            };
          }
        } catch (refreshError) {
          console.log('Token refresh failed, will start new authentication flow:', refreshError);
        }
      }
    } else if (tokenStatus.isValid && tokenStatus.authtype !== authtype) {
      console.log(`Authentication type has changed, proceeding with new login`);
    }

    // Update global auth type to match the requested flow
    setActiveEnvironementInConfig(environment);

    if (authtype === 'oauth') {
      // OAuth flow
      if (!tenanturl) {
        return {
          success: false,
          error: 'Tenant is required for OAuth login'
        };
      }

      try {
        // Perform OAuth login
        const loginResult = await OAuthLogin({
          tenant: tenanturl,
          baseAPIUrl: baseurl,
          environment: environment
        });

        if (!loginResult.success) {
          return {
            success: false,
            error: formatErrorAsString(loginResult.error)
          };
        }

        // Return UUID and authUrl for frontend polling
        if (loginResult.uuid) {
          return {
            success: true,
            uuid: loginResult.uuid,
            authUrl: loginResult.authUrl
          };
        }

        // Fallback to old behavior (shouldn't happen with new implementation)
        const oauthTokens = getStoredOAuthTokens(environment);
        if (!oauthTokens) {
          return {
            success: false,
            error: 'No OAuth tokens found for environment: ' + environment
          };
        }

        // Test the connection with the new tokens
        const connectionResult = await connectToISCWithToken(
          baseurl,
          oauthTokens.accessToken,
        );

        return {
          success: connectionResult.connected,
          error: formatErrorAsString(connectionResult.error)
        };
      } catch (oauthError) {
        console.error('OAuth login failed:');
        return {
          success: false,
          error: oauthError instanceof Error ? oauthError.message : 'OAuth login failed'
        };
      }
    } else {
      // PAT flow
      const patTokens = getStoredPATTokens(environment);
      if (!patTokens) {
        return {
          success: false,
          error: 'Client ID and Client Secret are required for PAT login'
        };
      }

      try {
        const connectionResult = await connectToISCWithPAT(
          baseurl,
          patTokens.clientId,
          patTokens.clientSecret,
        );

        return {
          success: connectionResult.connected,
          error: formatErrorAsString(connectionResult.error)
        };
      } catch (patError) {
        console.error('PAT login failed:', patError);
        return {
          success: false,
          error: patError instanceof Error ? patError.message : 'PAT login failed'
        };
      }
    }
  } catch (error) {
    console.error('Unified login error:', error);
    return {
      success: false,
      error: formatErrorAsString(error)
    };
  }
};

/**
 * Unified token refresh function that handles both OAuth and PAT tokens
 * @param environment - The environment name to refresh tokens for
 * @returns Promise resolving to the new token set
 */
export const refreshTokens = async (): Promise<{ success: boolean, error?: string }> => {
  while (refreshActive) {
    console.log('Refresh already in progress, waiting...');
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  const tokenDetails = getCurrentTokenDetails(activeEnvironment || '');
  if (tokenDetails.tokenDetails?.expiry && (new Date(tokenDetails.tokenDetails.expiry) > new Date())) {
    return { success: true };
  }

  refreshActive = true;
  const environment = activeEnvironment || '';
  try {
    const config = getConfig();
    if (!config.environments[environment]) {
      refreshActive = false;
      return {
        success: false,
        error: `Environment '${environment}' not found in configuration`
      };
    }
    const { tenanturl, baseurl, authtype } = config.environments[environment];

    switch (authtype) {
      case 'oauth': {
        const storedTokens = getStoredOAuthTokens(environment);
        if (!storedTokens || !storedTokens.refreshToken) {
          refreshActive = false;
          return { success: false, error: 'No refresh token available for OAuth refresh' };
        }

        if (checkTokenExpired(storedTokens.refreshToken)) {
          refreshActive = false;
          return { success: false, error: 'Refresh token has expired' };
        }

        await refreshOAuthToken(environment);
        await connectToISCWithToken(baseurl, getStoredOAuthTokens(environment)!.accessToken);
        refreshActive = false;
        return { success: true, error: undefined };
      }

      case 'pat':
        await refreshPATToken(environment);
        await connectToISCWithPAT(
          baseurl,
          getStoredPATTokens(environment)!.clientId,
          getStoredPATTokens(environment)!.clientSecret,
        );
        refreshActive = false;
        return { success: true, error: undefined };

      default:
        refreshActive = false;
        return { success: false, error: 'Unsupported auth type: ' + authtype };
    }
  } catch (error) {
    refreshActive = false;
    console.error('Error refreshing tokens:', error);
    return { success: false, error: 'Error refreshing tokens: ' + error };
  }
};

export const connectToISCWithPAT = async (
  apiUrl: string,
  clientId: string,
  clientSecret: string,
) => {
  console.log('Connecting to ISC with PAT:');
  let config: ConfigurationParameters = {
    clientId: clientId,
    clientSecret: clientSecret,
    tokenUrl: apiUrl + `/oauth/token`,
    baseurl: apiUrl,
  };
  try {
    apiConfig = new Configuration(config);
    apiConfig.experimental = true;
    let tenantApi = new TenantV2024Api(apiConfig);
    let response = await tenantApi.getTenant();
    if (response.status !== 200) {
      return { connected: false, error: 'Failed to connect to ISC with PAT' };
    }
    return { connected: true, error: undefined };
  } catch (error) {
    console.error('Error connecting to ISC:', error);
    return { connected: false, error: formatErrorAsString(error) };
  }
};

export const connectToISCWithToken = async (
  apiUrl: string,
  accessToken: string,
) => {
  console.log('Connecting to ISC with token:');
  let config: ConfigurationParameters = {
    accessToken: accessToken,
    baseurl: apiUrl,
  };
  try {
    apiConfig = new Configuration(config);
    apiConfig.experimental = true;
    let tenantApi = new TenantV2024Api(apiConfig);
    let response = await tenantApi.getTenant();
    if (response.status !== 200) {
      return { connected: false, error: 'Failed to connect to ISC with token' };
    }
    return { connected: true, error: undefined };
  } catch (error) {
    console.error('Error connecting to ISC:', error);
    return { connected: false, error: formatErrorAsString(error) };
  }
};

export type AccessTokenStatus = {
  authtype: string;
  accessTokenIsValid: boolean;
  expiry?: Date;
  needsRefresh: boolean;
}

export type RefreshTokenStatus = {
  authtype: "oauth";
  refreshTokenIsValid: boolean;
  expiry?: Date;
  needsRefresh: boolean;
}

export type TokenDetails = {
  expiry: Date;
} & AuthPayload;

export function getTokenDetails(token: string): TokenDetails {
  const parsedToken = parseJwt(token);

  const expiry = new Date(parsedToken.exp * 1000);

  return {
    expiry,
    ...parsedToken
  }
}

export function getCurrentTokenDetails(environment: string): { tokenDetails: TokenDetails | undefined, error?: string } {
  try {
    const { tenanturl, baseurl, authtype } = getConfigEnvironment(environment);
    switch (authtype) {
      case 'oauth':
        const oauthTokens = getStoredOAuthTokens(environment);
        if (!oauthTokens) {
          return {
            tokenDetails: undefined,
            error: 'No OAuth tokens found for environment: ' + environment
          };
        }
        return {
          tokenDetails: getTokenDetails(oauthTokens.accessToken),
          error: undefined
        };
      case 'pat':
        const patTokens = getStoredPATTokens(environment);
        if (!patTokens) {
          return {
            tokenDetails: undefined,
            error: 'No PAT tokens found for environment: ' + environment
          };
        }
        return {
          tokenDetails: getTokenDetails(patTokens.accessToken),
          error: undefined
        };
        break;

      default:
        return {
          tokenDetails: undefined,
          error: 'Unsupported auth type: ' + authtype
        };
    }
  } catch (error) {
    console.error('Error getting current token details:', error);
    return {
      tokenDetails: undefined,
      error: formatErrorAsString(error)
    };
  }
}

/**
 * Checks the access token status for a given environment.
 * 
 * If all token expiry times are valid, tests the access token against the API
 * @param environment - The environment name to check access token status for
 * @returns Access token status information
 */
export async function checkAccessTokenStatus(): Promise<AccessTokenStatus> {
  const environment = activeEnvironment || '';
  try {
    const { tenanturl, baseurl, authtype } = getConfigEnvironment(environment);

    let storedTokens: TokenSet | undefined;

    switch (authtype) {
      case 'oauth':
        storedTokens = getStoredOAuthTokens(environment);
        break;
      case 'pat':
        storedTokens = getStoredPATTokens(environment);
        break;
      default:
        return {
          accessTokenIsValid: false,
          authtype,
          needsRefresh: false
        };
    }

    if (!storedTokens) {
      return {
        accessTokenIsValid: false,
        authtype,
        needsRefresh: false
      };
    }

    const parsedToken = parseJwt(storedTokens.accessToken);
    const expiry = new Date(parsedToken.exp * 1000);
    const now = new Date();

    if (expiry < now) {
      return {
        accessTokenIsValid: false,
        authtype,
        needsRefresh: true,
        expiry
      };
    }

    const tokenTest = await testAccessToken(environment, authtype);

    return {
      accessTokenIsValid: tokenTest.isValid,
      authtype,
      needsRefresh: tokenTest.needsRefresh,
      expiry
    };

  } catch (error) {
    console.error('Error checking token status:', error);
    return {
      accessTokenIsValid: false,
      authtype: 'unknown',
      needsRefresh: false
    };
  }
};


export async function testAccessToken(environment: string, authtype: string): Promise<{ isValid: boolean, needsRefresh: boolean, error?: string }> {

  let accessToken;

  switch (authtype) {
    case 'oauth':
      const oauthTokens = getStoredOAuthTokens(environment);
      if (!oauthTokens) {
        return { isValid: false, needsRefresh: false, error: 'No OAuth tokens found for environment: ' + environment };
      }
      if (checkTokenExpired(oauthTokens.accessToken)) {
        return { isValid: false, needsRefresh: true };
      }
      accessToken = oauthTokens.accessToken;
      break;

    case 'pat':
      const patTokens = getStoredPATTokens(environment);
      if (!patTokens) {
        return { isValid: false, needsRefresh: false, error: 'No PAT tokens found for environment: ' + environment };
      }
      if (checkTokenExpired(patTokens.accessToken)) {
        return { isValid: false, needsRefresh: true };
      }
      accessToken = patTokens.accessToken;
      break;

    default:
      return { isValid: false, needsRefresh: false, error: 'Unsupported auth type: ' + authtype };
  }

  // Test the token against the API to see if it's still valid
  try {
    const config = getConfig();
    const envConfig = config.environments[environment];
    if (!envConfig) {
      console.log('Environment configuration not found');
      return { isValid: false, needsRefresh: false, error: 'Environment configuration not found' };
    }

    const apiUrl = envConfig.baseurl;
    const testConfig: ConfigurationParameters = {
      accessToken,
      baseurl: apiUrl,
    };

    const testApiConfig = new Configuration(testConfig);
    testApiConfig.experimental = true;
    const tenantApi = new TenantV2024Api(testApiConfig);

    // Try to get tenant info to validate the token
    const response = await tenantApi.getTenant();

    if (response.status === 200) {
      return {
        isValid: true,
        needsRefresh: false,
        error: undefined
      };
    } else {
      return {
        isValid: false,
        needsRefresh: true,
        error: formatErrorAsString(response.data)
      };
    }
  } catch (apiError) {
    // Token is invalid or expired, even though local expiry check passed
    console.log('OAuth token validation failed against API:', apiError);
    return {
      isValid: false,
      needsRefresh: true,
      error: formatErrorAsString(apiError)
    };
  }
}

export function checkTokenExpired(token: string) {
  const parsedToken = parseJwt(token);
  const expiry = new Date(parsedToken.exp * 1000);
  const now = new Date();
  return expiry < now;
}

export function validateTokens(environment: string): { isValid: boolean, needsRefresh: boolean, authtype: string } | undefined {
  try {
    const { tenanturl, baseurl, authtype } = getConfigEnvironment(environment);
    switch (authtype) {
      case 'oauth':
        const oauthValidation = validateOAuthTokens(environment);
        return {
          ...oauthValidation,
          authtype: 'oauth'
        };
      case 'pat':
        const patValidation = validatePATToken(environment);
        return {
          ...patValidation,
          authtype: 'pat'
        };
      default:
        break;
    }
  } catch (error) {
    console.error('Error validating tokens:', error);
    return {
      isValid: false,
      needsRefresh: false,
      authtype: 'unknown'
    };
  }
}


/**
 * Checks if the OAuth code flow is complete for a given UUID
 * @param uuid - The UUID from the initial OAuth login
 * @param environment - The environment name
 * @returns Promise resolving to completion status and token storage result
 */
export async function checkOauthCodeFlowComplete (uuid: string, environment: string): Promise<{ isComplete: boolean, success?: boolean, error?: string }> {
    try {
      const { tenanturl, baseurl, authtype } = getConfigEnvironment(environment);
        const tokenResponse = await fetch(`${authLambdaTokenURL}/${uuid}`);

        if (tokenResponse.ok) {
            const tokenData: TokenResponse = await tokenResponse.json();

            // Step 5: Get and consume the private key from memory
            const privateKey = consumePrivateKey();
            if (!privateKey) {
                throw new Error('Private key not found in memory');
            }

            // Step 6: Decrypt the token info using the private key
            const decryptedToken = decryptToken(tokenData.tokenInfo, privateKey);
            console.log('Decrypted token info');

            // Validate that we have the required tokens
            if (!decryptedToken.access_token) {
                console.error('Missing accessToken in response');
                return { isComplete: true, success: false, error: 'OAuth response missing access token' };
            }

            if (!decryptedToken.refresh_token) {
                console.error('Missing refreshToken in response');
                return { isComplete: true, success: false, error: 'OAuth response missing refresh token' };
            }

            // Step 7: Parse and store the tokens
            const accessTokenClaims = parseJwt(decryptedToken.access_token);
            const refreshTokenClaims = parseJwt(decryptedToken.refresh_token);

            const tokenSet = {
                accessToken: decryptedToken.access_token,
                accessExpiry: new Date(accessTokenClaims.exp * 1000),
                refreshToken: decryptedToken.refresh_token,
                refreshExpiry: new Date(refreshTokenClaims.exp * 1000),
            };

            storeOAuthTokens(environment, tokenSet);
            connectToISCWithToken(baseurl, tokenSet.accessToken);
            return { isComplete: true, success: true };
        } else if (tokenResponse.status === 404 || tokenResponse.status === 400) {
            // Token not ready yet, continue polling (backend returns 400 when token not found)
            return { isComplete: false };
        } else {
            // Some other error occurred
            return { isComplete: true, success: false, error: `Token endpoint returned status: ${tokenResponse.status}` };
        }
    } catch (error) {
        console.error('Error checking OAuth code flow completion:', error);
        return { isComplete: true, success: false, error: `Error checking OAuth completion: ${error}` };
    }
};