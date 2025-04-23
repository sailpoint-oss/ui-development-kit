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
const getTransforms = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (testMode) {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            const dummyTransform = {
                name: "sample Transform",
                type: sailpoint_api_client_1.TransformReadV2024TypeV2024.Lower,
                attributes: {},
                id: "id",
                internal: false
            };
            return [dummyTransform];
        }
        let transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
        let response = yield transformsApi.listTransforms();
        return response.data;
    }
    catch (error) {
        console.error('Error getting transforms:', error);
        return [];
    }
});
exports.getTransforms = getTransforms;
const createTransform = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
        let transformsV2024ApiCreateTransformRequest = {
            transformV2024: {
                name: 'My Transform',
                type: "accountAttribute",
                attributes: {}
            }
        };
        if (testMode) {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            const dummyTransform = {
                name: "sample Transform",
                type: sailpoint_api_client_1.TransformReadV2024TypeV2024.Lower,
                attributes: {},
                id: "id",
                internal: false
            };
            return dummyTransform;
        }
        let response = yield transformsApi.createTransform(request);
        return response.data;
    }
    catch (error) {
        console.error('Error getting transforms:', error);
        return [];
    }
});
exports.createTransform = createTransform;
const updateTransform = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (testMode) {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            const dummyTransform = {
                name: "sample Transform",
                type: sailpoint_api_client_1.TransformReadV2024TypeV2024.Lower,
                attributes: {},
                id: "id",
                internal: false
            };
            return dummyTransform;
        }
        let transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
        let response = yield transformsApi.updateTransform(request);
        return response.data;
    }
    catch (error) {
        console.error('Error updating transform:', error);
        return [];
    }
});
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