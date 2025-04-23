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
exports.getTenants = exports.connectToISC = exports.harborPilotTransformChat = exports.updateTransform = exports.createTransform = exports.getTransforms = exports.disconnectFromISC = void 0;
const sailpoint_api_client_1 = require("sailpoint-api-client");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const keytar = require("keytar");
const os = require("os");
const axios_1 = require("axios");
let apiConfig;
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
const disconnectFromISC = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.disconnectFromISC = disconnectFromISC;
// Generic function to handle API calls
function handleApiCall(apiCall) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield apiCall();
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            };
        }
        catch (error) {
            console.error('API call error:', error);
            return generateErrorResponse(error);
        }
    });
}
// Error response generator
function generateErrorResponse(error) {
    var _a, _b;
    if (error instanceof axios_1.AxiosError) {
        return {
            data: [],
            status: ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500,
            statusText: error.message,
            headers: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.headers) || {},
        };
    }
    return {
        data: [],
        status: 500,
        statusText: 'Unknown error occurred',
        headers: {},
    };
}
const getTransforms = () => {
    const transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
    return handleApiCall(() => transformsApi.listTransforms());
};
exports.getTransforms = getTransforms;
const createTransform = (request) => {
    const transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
    return handleApiCall(() => transformsApi.createTransform(request));
};
exports.createTransform = createTransform;
const updateTransform = (request) => {
    const transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
    return handleApiCall(() => transformsApi.updateTransform(request));
};
exports.updateTransform = updateTransform;
const harborPilotTransformChat = (chat) => __awaiter(void 0, void 0, void 0, function* () {
    if (aitestMode) {
        yield new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
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
            'Authorization': 'bearer ' + (yield apiConfig.accessToken)
        },
        maxBodyLength: Infinity
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
    if (testMode) {
        return { connected: true, name: "DevDays 2025" };
    }
    let config = {
        clientId: clientId,
        clientSecret: clientSecret,
        tokenUrl: apiUrl + `/oauth/token`,
        baseurl: apiUrl
    };
    try {
        apiConfig = new sailpoint_api_client_1.Configuration(config);
        let tenantApi = new sailpoint_api_client_1.TenantV2024Api(apiConfig);
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
    return allCreds.find(cred => cred.account === environment);
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
                clientSecret: yield getClientSecret(environment)
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
//# sourceMappingURL=api.js.map