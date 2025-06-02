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
async function decryptTokenInfo(encryptedToken: string, encryptionKey: string): Promise<string> {
  try {
    // Split the IV and encrypted data
    const parts = encryptedToken.split(':');
    if (parts.length !== 2) {
      throw new Error('invalid encrypted token format');
    }

    // Convert hex-encoded IV and encrypted data to Buffer
    const iv = Buffer.from(parts[0], 'hex');
    const encryptedData = Buffer.from(parts[1], 'hex');

    // Convert hex-encoded encryption key to Buffer
    const key = Buffer.from(encryptionKey, 'hex');

    // Create decipher
    const crypto = require('crypto');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    // Decrypt the data
    let decrypted = Buffer.concat([
      decipher.update(encryptedData),
      decipher.final()
    ]);

    // Remove PKCS7 padding
    const paddingLen = decrypted[decrypted.length - 1];
    if (paddingLen > 16 || paddingLen === 0) {
      throw new Error('invalid padding size');
    }
    decrypted = decrypted.subarray(0, decrypted.length - paddingLen);

    return decrypted.toString('utf8');
  } catch (error) {
    console.error('Decryption error:', error);
    throw error;
  }
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

interface EnvironmentConfigRequest {
  environmentName: string;
  tenantUrl: string;
  baseUrl: string;
  authType: 'oauth' | 'pat';
  clientId?: string;
  clientSecret?: string;
  update: boolean;
}

interface ConfigUpdateResult {
  success: boolean;
  error?: string;
}

async function setSecureValue(
  key: string,
  environment: string,
  value: string,
): Promise<void> {
  try {
    await keytar.setPassword(key, environment, value);
  } catch (error) {
    console.error(`Error setting secure value for ${key}:`, error);
    throw error;
  }
}

async function deleteSecureValue(
  key: string,
  environment: string,
): Promise<void> {
  try {
    await keytar.deletePassword(key, environment);
  } catch (error) {
    console.error(`Error deleting secure value for ${key}:`, error);
    // Don't throw error for delete operations as the key might not exist
  }
}

export const createOrUpdateEnvironment = async (
  config: EnvironmentConfigRequest,
): Promise<ConfigUpdateResult> => {
  try {
    const homedir = os.homedir();
    const configPath = path.join(homedir, '.sailpoint', 'config.yaml');
    const configDir = path.dirname(configPath);

    // Ensure the .sailpoint directory exists
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    let existingConfig: CLIConfig;
    
    // Read existing config or create new one
    try {
      const configFile = fs.readFileSync(configPath, 'utf8');
      existingConfig = yaml.load(configFile) as CLIConfig;
    } catch (error) {
      // Create new config if file doesn't exist
      existingConfig = {
        authtype: 'pat',
        activeenvironment: '',
        environments: {}
      };
    }

    // Check if environment already exists and update flag is not set
    if (existingConfig.environments[config.environmentName] && !config.update) {
      return {
        success: false,
        error: `Environment '${config.environmentName}' already exists. Use update mode to modify it.`
      };
    }

    // Create or update environment configuration
    existingConfig.environments[config.environmentName] = {
      tenanturl: config.tenantUrl,
      baseurl: config.baseUrl,
      pat: {
        accessToken: '' // This will be populated during authentication
      }
    };

    // Set auth type
    existingConfig.authtype = config.authType;

    // Set as active environment
    existingConfig.activeenvironment = config.environmentName;

    // Save credentials securely if provided
    if (config.authType === 'pat' && config.clientId && config.clientSecret) {
      await setSecureValue('environments.pat.clientid', config.environmentName, config.clientId);
      await setSecureValue('environments.pat.clientsecret', config.environmentName, config.clientSecret);
    }

    // Write config file
    const yamlStr = yaml.dump(existingConfig);
    fs.writeFileSync(configPath, yamlStr, 'utf8');

    return { success: true };
  } catch (error) {
    console.error('Error creating/updating environment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const deleteEnvironment = async (
  environmentName: string,
): Promise<ConfigUpdateResult> => {
  try {
    const homedir = os.homedir();
    const configPath = path.join(homedir, '.sailpoint', 'config.yaml');

    if (!fs.existsSync(configPath)) {
      return {
        success: false,
        error: 'Configuration file not found'
      };
    }

    const configFile = fs.readFileSync(configPath, 'utf8');
    const existingConfig = yaml.load(configFile) as CLIConfig;

    // Check if environment exists
    if (!existingConfig.environments[environmentName]) {
      return {
        success: false,
        error: `Environment '${environmentName}' does not exist`
      };
    }

    // Remove environment from config
    delete existingConfig.environments[environmentName];

    // If this was the active environment, clear it or set to another one
    if (existingConfig.activeenvironment === environmentName) {
      const remainingEnvs = Object.keys(existingConfig.environments);
      existingConfig.activeenvironment = remainingEnvs.length > 0 ? remainingEnvs[0] : '';
    }

    // Delete stored credentials
    await deleteSecureValue('environments.pat.clientid', environmentName);
    await deleteSecureValue('environments.pat.clientsecret', environmentName);
    await deleteSecureValue('environments.pat.accesstoken', environmentName);

    // Write updated config file
    const yamlStr = yaml.dump(existingConfig);
    fs.writeFileSync(configPath, yamlStr, 'utf8');

    return { success: true };
  } catch (error) {
    console.error('Error deleting environment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const setActiveEnvironment = async (
  environmentName: string,
): Promise<ConfigUpdateResult> => {
  try {
    const homedir = os.homedir();
    const configPath = path.join(homedir, '.sailpoint', 'config.yaml');

    if (!fs.existsSync(configPath)) {
      return {
        success: false,
        error: 'Configuration file not found'
      };
    }

    const configFile = fs.readFileSync(configPath, 'utf8');
    const existingConfig = yaml.load(configFile) as CLIConfig;

    // Check if environment exists
    if (!existingConfig.environments[environmentName]) {
      return {
        success: false,
        error: `Environment '${environmentName}' does not exist`
      };
    }

    // Set as active environment
    existingConfig.activeenvironment = environmentName;

    // Write updated config file
    const yamlStr = yaml.dump(existingConfig);
    fs.writeFileSync(configPath, yamlStr, 'utf8');

    return { success: true };
  } catch (error) {
    console.error('Error setting active environment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};
