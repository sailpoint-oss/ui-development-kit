import {
  Configuration,
  TenantV2024Api,
  ConfigurationParameters,
  TransformsV2024Api,
  TransformsV2024ApiCreateTransformRequest,
  TransformsV2024ApiUpdateTransformRequest,
  TransformReadV2024,
  TransformReadV2024TypeV2024,
} from 'sailpoint-api-client';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import * as keytar from 'keytar';
import * as os from 'os';
import axios, { AxiosError, AxiosResponse } from 'axios';

export let apiConfig: Configuration;
let testMode = false;
let aitestMode = true;

interface CLIConfig {
  authtype: string;
  activeenvironment: string;
  environments: {
    [key: string]: {
      tenanturl: string;
      baseurl: string;
      pat: {
        accessToken: string;
      };
    };
  };
}

interface Tenant {
  active: boolean;
  apiUrl: string;
  tenantUrl: string;
  clientId: string | null;
  clientSecret: string | null;
  name: string;
}

async function getConfig(): Promise<CLIConfig> {
  const homedir = os.homedir();
  const configPath = path.join(homedir, '.sailpoint', 'config.yaml');

  try {
    const configFile = fs.readFileSync(configPath, 'utf8');
    return yaml.load(configFile) as CLIConfig;
  } catch (error) {
    console.error('Error reading config file:', error);
    throw error;
  }
}

export const disconnectFromISC = async () => {};

interface TokenSet {
  accessToken: string;
  accessExpiry: Date;
  refreshToken: string;
  refreshExpiry: Date;
}

interface AuthResponse {
  id: string;
  encryptionKey: string;
  authURL: string;
  baseURL: string;
}

interface TokenResponse {
  baseURL: string;
  id: string;
  tokenInfo: string;
}

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export const OAuthLogin = async ({tenant, baseAPIUrl}: {tenant: string, baseAPIUrl: string}): Promise<TokenSet> => {
  // Step 1: Request UUID, encryption key, and Auth URL from Auth-Lambda
  const authLambdaURL = 'https://nug87yusrg.execute-api.us-east-1.amazonaws.com/Prod/sailapps/uuid';
  
  try {
    const response = await fetch(authLambdaURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tenant, baseAPIUrl }),
    });

    if (!response.ok) {
      throw new Error(`Auth lambda returned non-200 status: ${response.status}`);
    }

    const authResponse: AuthResponse = await response.json();
    console.log('Auth Response:', authResponse);

    // Step 2: Present Auth URL to user
    console.log('Attempting to open browser for authentication');
    try {
      // Using the 'open' package to open the browser
      const open = require('open');
      await open(authResponse.authURL);
    } catch (err) {
      console.warn('Cannot open automatically, Please manually open OAuth login page below');
      console.log(authResponse.authURL);
    }

    // Step 3: Poll Auth-Lambda for token using UUID
    const pollInterval = 2000; // 2 seconds
    const timeout = 5 * 60 * 1000; // 5 minutes
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      try {
        const tokenResponse = await fetch(`${authLambdaURL}/${authResponse.id}`);
        
        if (tokenResponse.ok) {
          const tokenData: TokenResponse = await tokenResponse.json();
          
          // Decrypt the token info using the encryption key
          const decryptedTokenInfo = await decryptTokenInfo(tokenData.tokenInfo, authResponse.encryptionKey);
          const response: RefreshResponse = JSON.parse(decryptedTokenInfo);

          // Parse tokens to get expiry
          const accessTokenClaims = parseJwt(response.accessToken);
          const refreshTokenClaims = parseJwt(response.refreshToken);

          return {
            accessToken: response.accessToken,
            accessExpiry: new Date(accessTokenClaims.exp * 1000),
            refreshToken: response.refreshToken,
            refreshExpiry: new Date(refreshTokenClaims.exp * 1000),
          };
        }
      } catch (err) {
        console.error('Error polling for token:', err);
      }

      // Wait for the next poll interval
      await new Promise(resolve => setTimeout(resolve, pollInterval));
    }

    throw new Error('Authentication timed out after 5 minutes');
  } catch (error) {
    console.error('OAuth login error:', error);
    throw error;
  }
};

// Helper function to parse JWT without verification
function parseJwt(token: string): any {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

// Helper function to decrypt token info
async function decryptTokenInfo(tokenInfo: string, encryptionKey: string): Promise<string> {
  // Implement decryption logic here
  // This is a placeholder - you'll need to implement the actual decryption
  // based on your encryption method
  return tokenInfo;
}

interface HarborPilotChatResponse {
  actions: HarborPilotAction[];
}
interface HarborPilotAction {
  data: any;
}

export const harborPilotTransformChat = async (
  chat: string,
): Promise<HarborPilotChatResponse> => {
  if (aitestMode) {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
    return {
      actions: [
        {
          data: {
            id: '1e65870d-70d0-4b03-adbf-5e2e3196560e',
            name: 'Uppercase First 3 Characters',
            type: 'concat',
            attributes: {
              values: [
                {
                  type: 'upper',
                  attributes: {
                    input: {
                      type: 'substring',
                      attributes: {
                        input: {
                          type: 'tester',
                        },
                        begin: 0,
                        end: 3,
                      },
                    },
                  },
                },
                {
                  type: 'substring',
                  attributes: {
                    input: {
                      type: 'tester',
                    },
                    begin: 3,
                  },
                },
              ],
            },
            internal: false,
          },
        },
      ],
    };
  }

  let data = JSON.stringify({
    userMsg: chat,
    sessionId: '8f7e6186-72bd-4719-8c6e-95180a770e72',
    context: {
      tools: ['transform-builder'],
    },
  });

  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + (await apiConfig.accessToken),
    },
    maxBodyLength: Infinity,
  };

  try {
    const response: AxiosResponse<HarborPilotChatResponse> = await axios.post(
      'http://localhost:7100/beta/harbor-pilot/chat',
      data,
      config,
    );
    return response.data;
  } catch (error) {
    console.error('Error in harbor pilot chat:', error);
    throw error;
  }
};

export const connectToISC = async (
  apiUrl: string,
  baseUrl: string,
  clientId: string,
  clientSecret: string,
) => {
  console.log('Connecting to ISC:');
  if (testMode) {
    return { connected: true, name: 'DevDays 2025' };
  }
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
    return { connected: true, name: response.data.fullName };
  } catch (error) {
    console.error('Error connecting to ISC:', error);
    return { connected: false, name: undefined };
  }
};

async function getSecureValue(
  key: string,
  environment: string,
): Promise<string> {
  try {
    const value = await keytar.getPassword(key, environment);
    const allCreds = await keytar.findCredentials(key);
    const cred = getCredential(allCreds, environment);
    return cred?.password || '';
  } catch (error) {
    console.error(`Error getting secure value for ${key}:`, error);
    return '';
  }
}

function getCredential(
  allCreds: Array<{ account: string; password: string }>,
  environment: string,
): { account: string; password: string } | undefined {
  return allCreds.find((cred) => cred.account === environment);
}

async function getClientId(env: string): Promise<string | null> {
  return getSecureValue('environments.pat.clientid', env);
}

async function getClientSecret(env: string): Promise<string | null> {
  return getSecureValue('environments.pat.clientsecret', env);
}

async function getAccessToken(env: string): Promise<string | null> {
  return getSecureValue('environments.pat.accesstoken', env);
}

export const getTenants = async () => {
  try {
    const config = await getConfig();

    const activeEnv = config.activeenvironment;

    const tenants: Tenant[] = [];
    for (let environment of Object.keys(config.environments)) {
      tenants.push({
        active: environment === activeEnv,
        name: environment,

        apiUrl: config.environments[environment].baseurl,
        tenantUrl: config.environments[environment].tenanturl,
        clientId: await getClientId(environment),
        clientSecret: await getClientSecret(environment),
      });
    }
    return tenants;
  } catch (error) {
    console.error('Error getting tenants:', error);
    return [];
  }
};
