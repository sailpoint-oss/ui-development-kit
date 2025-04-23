import { Configuration, TenantV2024Api, ConfigurationParameters, TransformsV2024Api, TransformsV2024ApiCreateTransformRequest, TransformsV2024ApiUpdateTransformRequest, TransformReadV2024, TransformReadV2024TypeV2024 } from 'sailpoint-api-client';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import * as keytar from 'keytar';
import * as os from 'os';
import axios, { AxiosError, AxiosResponse } from 'axios';

let apiConfig: Configuration
let testMode = false
let aitestMode = true

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


export const disconnectFromISC = async () => {

}


type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
};

async function handleApiCall<T>(
  apiCall: () => Promise<AxiosResponse<T>>
): Promise<ApiResponse<T>> {
  try {
    const response = await apiCall();
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  } catch (error) {
    console.error('API call error:', error);
    return generateErrorResponse(error);
  }
}

function generateErrorResponse(error: unknown): ApiResponse<any> {
  if (error instanceof AxiosError) {
    return {
      data: [],
      status: error.response?.status || 500,
      statusText: error.message,
      headers: error.response?.headers as Record<string, string> || {},
    };
  }
  return {
    data: [],
    status: 500,
    statusText: 'Unknown error occurred',
    headers: {},
  };
}

export const getTransforms = (): Promise<ApiResponse<TransformReadV2024[]>> => {
  const transformsApi = new TransformsV2024Api(apiConfig);
  return handleApiCall(() => transformsApi.listTransforms());
};

export const createTransform = (request: TransformsV2024ApiCreateTransformRequest): Promise<ApiResponse<TransformReadV2024>> => {
  const transformsApi = new TransformsV2024Api(apiConfig);
  return handleApiCall(() => transformsApi.createTransform(request));
};

export const updateTransform = (request: TransformsV2024ApiUpdateTransformRequest): Promise<ApiResponse<TransformReadV2024>> => {
  const transformsApi = new TransformsV2024Api(apiConfig);
  return handleApiCall(() => transformsApi.updateTransform(request));
};



interface HarborPilotChatResponse {
  actions: HarborPilotAction[]
}
interface HarborPilotAction {
  data: any;
}

export const harborPilotTransformChat = async (chat: string): Promise<HarborPilotChatResponse> => {
  if (aitestMode) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    return {
      actions: [
        {
          data: {
            "id": "1e65870d-70d0-4b03-adbf-5e2e3196560e",
            "name": "Uppercase First 3 Characters",
            "type": "concat",
            "attributes": {
              "values": [
                {
                  "type": "upper",
                  "attributes": {
                    "input": {
                      "type": "substring",
                      "attributes": {
                        "input": {
                          "type": "tester"
                        },
                        "begin": 0,
                        "end": 3
                      }
                    }
                  }
                },
                {
                  "type": "substring",
                  "attributes": {
                    "input": {
                      "type": "tester"
                    },
                    "begin": 3
                  }
                }
              ]
            },
            "internal": false
          }
        }
      ]
    };
  }

  let data = JSON.stringify({
    "userMsg": chat,
    "sessionId": "8f7e6186-72bd-4719-8c6e-95180a770e72",
    "context": {
      "tools": [
        "transform-builder"
      ]
    }
  });

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + await apiConfig.accessToken
    },
    maxBodyLength: Infinity
  };

  try {
    const response: AxiosResponse<HarborPilotChatResponse> = await axios.post(
      'http://localhost:7100/beta/harbor-pilot/chat',
      data,
      config
    );
    return response.data;
  } catch (error) {
    console.error('Error in harbor pilot chat:', error);
    throw error;
  }
}


export const connectToISC = async (apiUrl: string, baseUrl: string, clientId: string, clientSecret: string) => {
  if (testMode) {
    return { connected: true, name: "DevDays 2025" };
  }
  let config: ConfigurationParameters = {
    clientId: clientId,
    clientSecret: clientSecret,
    tokenUrl: apiUrl + `/oauth/token`,
    baseurl: apiUrl
  }
  try {
    apiConfig = new Configuration(config);
    let tenantApi = new TenantV2024Api(apiConfig);
    let response = await tenantApi.getTenant();
    return { connected: true, name: response.data.fullName };
  } catch (error) {
    console.error('Error connecting to ISC:', error);
    return { connected: false, name: undefined };
  }

}


async function getSecureValue(key: string, environment: string): Promise<string> {

  try {
    const value = await keytar.getPassword(key, environment);
    const allCreds = await keytar.findCredentials(key);
    const cred = getCredential(allCreds, environment)
    return cred?.password || '';
  } catch (error) {
    console.error(`Error getting secure value for ${key}:`, error);
    return '';
  }
}

function getCredential(allCreds: Array<{ account: string, password: string }>, environment: string): { account: string, password: string } | undefined {
  return allCreds.find(cred => cred.account === environment);
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

    const tenants: Tenant[] = []
    for (let environment of Object.keys(config.environments)) {
      tenants.push({
        active: environment === activeEnv,
        name: environment,

        apiUrl: config.environments[environment].baseurl,
        tenantUrl: config.environments[environment].tenanturl,
        clientId: await getClientId(environment),
        clientSecret: await getClientSecret(environment)
      })
    }
    return tenants;
  } catch (error) {
    console.error('Error getting tenants:', error);
    return [];
  }
}
