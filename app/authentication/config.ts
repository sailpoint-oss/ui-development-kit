import { dialog, safeStorage } from "electron";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { dump, load } from "js-yaml";
import { homedir } from "os";
import path from "path";
import { getStoredPATTokens } from "./pat";

// Global values

const homeDirectory = homedir();
const configPath = path.join(homeDirectory, '.sailpoint', 'config.yaml');

// Utils

export type Tenant = {
  active: boolean;
  name: string;
  apiUrl: string;
  tenantUrl: string;
  clientId: string | null;
  clientSecret: string | null;
  authtype: "oauth" | "pat";
  tenantName: string;
}

export const getTenants = (): Tenant[] => {
  try {
    const config = getConfig();

    const activeEnv = config.activeuienvironment;

    const tenants: Tenant[] = [];
    for (let environment of Object.keys(config.environments)) {
      const envConfig = config.environments[environment];
      const storedPATTokens = getStoredPATTokens(environment);

      console.log(`Test Loading tenant ${environment}:`, {
        hasStoredTokens: !!storedPATTokens,
        hasClientId: !!storedPATTokens?.clientId,
        hasClientSecret: !!storedPATTokens?.clientSecret,
        authtype: envConfig.authtype,
        clientIdLength: storedPATTokens?.clientId?.length || 0,
        clientSecretLength: storedPATTokens?.clientSecret?.length || 0
      });

      tenants.push({
        active: environment === activeEnv,
        name: environment,
        apiUrl: envConfig.baseurl,
        tenantUrl: envConfig.tenanturl,
        clientId: storedPATTokens?.clientId || null,
        clientSecret: storedPATTokens?.clientSecret || null,
        authtype: envConfig.authtype,
        tenantName: environment,
      });
    }
    return tenants;
  } catch (error) {
    console.error('Error getting tenants:', error);
    return [];
  }
};

// When encryption is not available, we want to make it SUPER clear to the user, and give them a path forward.
function showEncryptionUnavailableError() {
  dialog.showErrorBox('Encryption unavailable', `Encryption is not available in your operating system.

    You can troubleshoot this on your own by reading the documentation here:
    https://www.electronjs.org/docs/latest/api/safe-storage and implementing one of the supported packages for your OS.
            
    Please submit an issue on GitHub here: https://github.com/sailpoint-oss/ui-development-kit`);
}

// Config functions

export interface CLIConfig {
  authtype: "oauth" | "pat";
  activeenvironment: string;
  activeuienvironment?: string;
  environments: {
    [key: string]: {
      tenanturl: string;
      baseurl: string;
      authtype: "oauth" | "pat";
    };
  };
}

export function getConfigEnvironment(environment: string): { tenanturl, baseurl, authtype } {
  try {
    
  } catch (error) {
    
  }
      const config = getConfig();
      if (!config.environments[environment]) {
        return { tenanturl: '', baseurl: '', authtype: 'undefined' };
      }
  
      const { tenanturl, baseurl, authtype } = config.environments[environment];
      return { tenanturl, baseurl, authtype };
}

export function getConfig(): CLIConfig {
  try {
    const configFile = readFileSync(configPath, 'utf8');
    return load(configFile) as CLIConfig;
  } catch (error) {
    console.error('Error reading config file:', error);
    throw error;
  }
}

export function setActiveEnvironementInConfig(environment: string) {
  try {
    const config = getConfig(); 
    config.activeenvironment = environment;
    setConfig(config);
  } catch (error) {
    console.error('Error setting active environment in config:', error);
    throw error;
  }
}

export function setConfig(config: CLIConfig) {
  try {
    if (!existsSync(configPath)) {
      mkdirSync(path.dirname(configPath), { recursive: true });
    }

    const yamlStr = dump(config);
    writeFileSync(configPath, yamlStr, 'utf8');
  } catch (error) {
    console.error('Error setting config:', error);
    throw error;
  }
}

// Environment management

export interface UpdateEnvironmentRequest {
  environmentName: string;
  tenantUrl: string;
  baseUrl: string;
  authtype: 'oauth' | 'pat';
  clientId?: string;
  clientSecret?: string;
}
// This function will update the environment or create one if it doesn't exist
export const updateEnvironment = (
  configureRequest: UpdateEnvironmentRequest,
): { success: boolean, error?: string } => {
  try {
    let config: CLIConfig;

    // Read existing config or create new one
    try {

      config = getConfig();

    } catch (error) {

      // Create new config if file doesn't exist
      config = {
        authtype: 'oauth',
        activeenvironment: configureRequest.environmentName,
        activeuienvironment: configureRequest.environmentName,
        environments: {}
      };

    }

    // Populate the environments API variables
    config.environments[configureRequest.environmentName] = {
      tenanturl: configureRequest.tenantUrl,
      baseurl: configureRequest.baseUrl,
      authtype: configureRequest.authtype,
    }

    // Save credentials securely if provided
    console.log(`Processing credentials for environment: ${configureRequest.environmentName}`, {
      authtype: configureRequest.authtype,
      hasClientId: !!configureRequest.clientId,
      hasClientSecret: !!configureRequest.clientSecret,
    });

    if (configureRequest.clientId && configureRequest.clientSecret) {
      // Save new credentials
      setSecureValue('environments.pat.clientid', configureRequest.environmentName, configureRequest.clientId);
      setSecureValue('environments.pat.clientsecret', configureRequest.environmentName, configureRequest.clientSecret);
      console.log(`PAT credentials saved for environment: ${configureRequest.environmentName}`);
    }

    // Write config file
    setConfig(config);

    return { success: true };
  } catch (error) {
    console.error('Error creating/updating environment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const deleteEnvironment = (
  environmentName: string,
) => {
  try {
    const config = getConfig();

    // Check if environment exists
    if (!config.environments[environmentName]) {
      return {
        success: false,
        error: `Environment '${environmentName}' does not exist`
      };
    }

    // Remove environment from config
    delete config.environments[environmentName];

    // If this was the active environment, clear it or set to another one
    if (config.activeenvironment === environmentName) {
      const remainingEnvs = Object.keys(config.environments);
      config.activeenvironment = remainingEnvs.length > 0 ? remainingEnvs[0] : '';
    }

    // Delete stored credentials
    deleteSecureValue('environments.pat.clientid', environmentName);
    deleteSecureValue('environments.pat.clientsecret', environmentName);
    deleteSecureValue('environments.pat.accesstoken', environmentName);
    deleteSecureValue('environments.pat.expiry', environmentName);

    // Delete OAuth tokens
    deleteSecureValue('environments.oauth.accesstoken', environmentName);
    deleteSecureValue('environments.oauth.expiry', environmentName);
    deleteSecureValue('environments.oauth.refreshtoken', environmentName);
    deleteSecureValue('environments.oauth.refreshexpiry', environmentName);

    // Write updated config file
    setConfig(config);

    return { success: true };
  } catch (error) {
    console.error('Error deleting environment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const setActiveEnvironment = (
  environmentName: string,
) => {
  try {
    const config = getConfig();

    // Check if environment exists
    if (!config.environments[environmentName]) {
      return {
        success: false,
        error: `Environment '${environmentName}' does not exist`
      };
    }

    // Set as active environment
    config.activeuienvironment = environmentName;

    // Write updated config file
    setConfig(config);

    return { success: true };
  } catch (error) {
    console.error('Error setting active environment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Secure storage functions

function getSecureDir(): string {
  const secureDir = path.join(homedir(), '.sailpoint', 'secure');

  // create the `secure` folder if it doesn't exist
  if (!existsSync(secureDir)) {
    mkdirSync(secureDir, { recursive: true });
  }

  return secureDir;
}

function formatSecureFilename(key: string, environment: string): string {

  const safeKey = key.replace(/[^a-zA-Z0-9]/g, '_');

  // Create a safe filename by replacing special characters, this is needed since the environment name is whatever the user specified.
  const safeEnv = environment.replace(/[^a-zA-Z0-9]/g, '_');

  return `${safeKey}_${safeEnv}.enc`;
}

export function buildSecretFilePath(key: string, environment: string): string {
  const secureDir = getSecureDir();
  const filename = formatSecureFilename(key, environment);
  return path.join(secureDir, filename);
}

export function getSecureValue(
  key: string,
  environment: string,
): string {
  try {
    if (!safeStorage.isEncryptionAvailable()) {
      showEncryptionUnavailableError()
      throw new Error('Encryption not available');
    }

    const filePath = buildSecretFilePath(key, environment);

    // The value doesnt exist
    if (!existsSync(filePath)) {
      return '';
    }

    // Read the encrypted data
    const encryptedData = readFileSync(filePath);

    // Let electron decrypt the data
    let value = safeStorage.decryptString(encryptedData);

    return value;
  } catch (error) {
    console.error(`Error getting secure value for ${key}:`, error);
    return '';
  }
}

export function setSecureValue(
  key: string,
  environment: string,
  value: string,
) {
  try {
    if (!safeStorage.isEncryptionAvailable()) {
      showEncryptionUnavailableError()
      throw new Error('Encryption not available');
    }

    const filePath = buildSecretFilePath(key, environment);

    // Let electron encrypt the data
    const encryptedData = safeStorage.encryptString(value);

    writeFileSync(filePath, encryptedData);
  } catch (error) {
    console.error(`Error setting secure value for ${key}:`, error);
    throw error;
  }
}

export function deleteSecureValue(
  key: string,
  environment: string,
) {
  try {
    const filePath = buildSecretFilePath(key, environment);

    if (existsSync(filePath)) {
      // unlink is a cross-platform delete
      unlinkSync(filePath);
    }
  } catch (error) {
    // We don't throw an error as the value may not have existed already
    console.error(`Error deleting secure value for ${key}:`, error);
  }
}