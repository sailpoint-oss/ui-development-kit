import {Configuration, TenantV2024Api, ConfigurationParameters} from 'sailpoint-api-client';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import * as keytar from 'keytar';
import * as os from 'os';

interface CLIConfig {
    authtype: string;
    activeenvironment : string;
    environments: {
      [key: string]: {
        tenantURL: string;
        baseURL: string;
        pat: {
          accessToken: string;
        };
      };
    };
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

export const connectToISC = async (tenantUrl: string, clientId: string, clientSecret: string) => {
    let config: ConfigurationParameters = {
        clientId: clientId,
        clientSecret: clientSecret,
        tokenUrl: `https://${tenantUrl}.api.identitynow.com/oauth2/token`
    }
    let apiConfig = new Configuration(config);
    let tenantApi = new TenantV2024Api(apiConfig);
    let response = await tenantApi.getTenant();
    return { connected: true, name: response.data.fullName };
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

  function getCredential(allCreds: Array<{ account: string, password: string}>, environment: string): { account: string, password: string} | undefined {
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
      
      if (config.authtype !== 'pat') {
        throw new Error('AuthType is not PAT');
      }
  
      const activeEnv = config.activeenvironment;
      const envConfig = config.environments[activeEnv];
  
      if (!envConfig) {
        throw new Error('Active environment not found in config');
      }
  
      const clientId = await getClientId(activeEnv);
      const clientSecret = await getClientSecret(activeEnv);
      const accessToken = await getAccessToken(activeEnv);
  
      return [{
        name: activeEnv,
        tenantUrl: envConfig.tenantURL,
        authUrl: envConfig.baseURL,
        clientId,
        clientSecret,
        accessToken
      }];
    } catch (error) {
      console.error('Error getting tenants:', error);
      return [];
    }
  }
