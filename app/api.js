"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setActiveEnvironment = exports.deleteEnvironment = exports.createOrUpdateEnvironment = exports.getTenants = exports.connectToISC = exports.harborPilotTransformChat = exports.OAuthLogin = exports.disconnectFromISC = exports.apiConfig = void 0;
const sailpoint_api_client_1 = require("sailpoint-api-client");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const keytar = require("keytar");
const os = require("os");
const axios_1 = require("axios");
let testMode = false;
let aitestMode = true;
function getConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const homedir = os.homedir();
        const configPath = path.join(homedir, '.sailpoint', 'config.yaml');
        try {
            const configFile = fs.readFileSync(configPath, 'utf8');
            return yaml.load(configFile);
        }
        catch (error) {
            console.error('Error reading config file:', error);
            throw error;
        }
    });
}
const disconnectFromISC = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.disconnectFromISC = disconnectFromISC;
const OAuthLogin = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tenant, baseAPIUrl }) {
    // Step 1: Request UUID, encryption key, and Auth URL from Auth-Lambda
    const authLambdaURL = 'https://nug87yusrg.execute-api.us-east-1.amazonaws.com/Prod/sailapps/uuid';
    try {
        const response = yield fetch(authLambdaURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tenant, baseAPIUrl }),
        });
        if (!response.ok) {
            throw new Error(`Auth lambda returned non-200 status: ${response.status}`);
        }
        const authResponse = yield response.json();
        console.log('Auth Response:', authResponse);
        // Step 2: Present Auth URL to user
        console.log('Attempting to open browser for authentication');
        try {
            // Using the 'open' package to open the browser
            const open = require('open');
            yield open(authResponse.authURL);
        }
        catch (err) {
            console.warn('Cannot open automatically, Please manually open OAuth login page below');
            console.log(authResponse.authURL);
        }
        // Step 3: Poll Auth-Lambda for token using UUID
        const pollInterval = 2000; // 2 seconds
        const timeout = 5 * 60 * 1000; // 5 minutes
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            try {
                const tokenResponse = yield fetch(`${authLambdaURL}/${authResponse.id}`);
                if (tokenResponse.ok) {
                    const tokenData = yield tokenResponse.json();
                    // Decrypt the token info using the encryption key
                    const decryptedTokenInfo = yield decryptTokenInfo(tokenData.tokenInfo, authResponse.encryptionKey);
                    const response = JSON.parse(decryptedTokenInfo);
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
            }
            catch (err) {
                console.error('Error polling for token:', err);
            }
            // Wait for the next poll interval
            yield new Promise(resolve => setTimeout(resolve, pollInterval));
        }
        throw new Error('Authentication timed out after 5 minutes');
    }
    catch (error) {
        console.error('OAuth login error:', error);
        throw error;
    }
});
exports.OAuthLogin = OAuthLogin;
// Helper function to parse JWT without verification
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
// Helper function to decrypt token info
function decryptTokenInfo(encryptedToken, encryptionKey) {
    return __awaiter(this, void 0, void 0, function* () {
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
        }
        catch (error) {
            console.error('Decryption error:', error);
            throw error;
        }
    });
}
const harborPilotTransformChat = (chat) => __awaiter(void 0, void 0, void 0, function* () {
    if (aitestMode) {
        yield new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
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
            Authorization: 'bearer ' + (yield exports.apiConfig.accessToken),
        },
        maxBodyLength: Infinity,
    };
    try {
        const response = yield axios_1.default.post('http://localhost:7100/beta/harbor-pilot/chat', data, config);
        return response.data;
    }
    catch (error) {
        console.error('Error in harbor pilot chat:', error);
        throw error;
    }
});
exports.harborPilotTransformChat = harborPilotTransformChat;
const connectToISC = (apiUrl, baseUrl, clientId, clientSecret) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Connecting to ISC:');
    if (testMode) {
        return { connected: true, name: 'DevDays 2025' };
    }
    let config = {
        clientId: clientId,
        clientSecret: clientSecret,
        tokenUrl: apiUrl + `/oauth/token`,
        baseurl: apiUrl,
    };
    try {
        exports.apiConfig = new sailpoint_api_client_1.Configuration(config);
        exports.apiConfig.experimental = true;
        let tenantApi = new sailpoint_api_client_1.TenantV2024Api(exports.apiConfig);
        let response = yield tenantApi.getTenant();
        return { connected: true, name: response.data.fullName };
    }
    catch (error) {
        console.error('Error connecting to ISC:', error);
        return { connected: false, name: undefined };
    }
});
exports.connectToISC = connectToISC;
function getSecureValue(key, environment) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const value = yield keytar.getPassword(key, environment);
            const allCreds = yield keytar.findCredentials(key);
            const cred = getCredential(allCreds, environment);
            return (cred === null || cred === void 0 ? void 0 : cred.password) || '';
        }
        catch (error) {
            console.error(`Error getting secure value for ${key}:`, error);
            return '';
        }
    });
}
function getCredential(allCreds, environment) {
    return allCreds.find((cred) => cred.account === environment);
}
function getClientId(env) {
    return __awaiter(this, void 0, void 0, function* () {
        return getSecureValue('environments.pat.clientid', env);
    });
}
function getClientSecret(env) {
    return __awaiter(this, void 0, void 0, function* () {
        return getSecureValue('environments.pat.clientsecret', env);
    });
}
function getAccessToken(env) {
    return __awaiter(this, void 0, void 0, function* () {
        return getSecureValue('environments.pat.accesstoken', env);
    });
}
const getTenants = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = yield getConfig();
        const activeEnv = config.activeenvironment;
        const tenants = [];
        for (let environment of Object.keys(config.environments)) {
            tenants.push({
                active: environment === activeEnv,
                name: environment,
                apiUrl: config.environments[environment].baseurl,
                tenantUrl: config.environments[environment].tenanturl,
                clientId: yield getClientId(environment),
                clientSecret: yield getClientSecret(environment),
            });
        }
        return tenants;
    }
    catch (error) {
        console.error('Error getting tenants:', error);
        return [];
    }
});
exports.getTenants = getTenants;
function setSecureValue(key, environment, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield keytar.setPassword(key, environment, value);
        }
        catch (error) {
            console.error(`Error setting secure value for ${key}:`, error);
            throw error;
        }
    });
}
function deleteSecureValue(key, environment) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield keytar.deletePassword(key, environment);
        }
        catch (error) {
            console.error(`Error deleting secure value for ${key}:`, error);
            // Don't throw error for delete operations as the key might not exist
        }
    });
}
const createOrUpdateEnvironment = (config) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homedir = os.homedir();
        const configPath = path.join(homedir, '.sailpoint', 'config.yaml');
        const configDir = path.dirname(configPath);
        // Ensure the .sailpoint directory exists
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }
        let existingConfig;
        // Read existing config or create new one
        try {
            const configFile = fs.readFileSync(configPath, 'utf8');
            existingConfig = yaml.load(configFile);
        }
        catch (error) {
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
            yield setSecureValue('environments.pat.clientid', config.environmentName, config.clientId);
            yield setSecureValue('environments.pat.clientsecret', config.environmentName, config.clientSecret);
        }
        // Write config file
        const yamlStr = yaml.dump(existingConfig);
        fs.writeFileSync(configPath, yamlStr, 'utf8');
        return { success: true };
    }
    catch (error) {
        console.error('Error creating/updating environment:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
});
exports.createOrUpdateEnvironment = createOrUpdateEnvironment;
const deleteEnvironment = (environmentName) => __awaiter(void 0, void 0, void 0, function* () {
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
        const existingConfig = yaml.load(configFile);
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
        yield deleteSecureValue('environments.pat.clientid', environmentName);
        yield deleteSecureValue('environments.pat.clientsecret', environmentName);
        yield deleteSecureValue('environments.pat.accesstoken', environmentName);
        // Write updated config file
        const yamlStr = yaml.dump(existingConfig);
        fs.writeFileSync(configPath, yamlStr, 'utf8');
        return { success: true };
    }
    catch (error) {
        console.error('Error deleting environment:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
});
exports.deleteEnvironment = deleteEnvironment;
const setActiveEnvironment = (environmentName) => __awaiter(void 0, void 0, void 0, function* () {
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
        const existingConfig = yaml.load(configFile);
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
    }
    catch (error) {
        console.error('Error setting active environment:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
});
exports.setActiveEnvironment = setActiveEnvironment;
//# sourceMappingURL=api.js.map