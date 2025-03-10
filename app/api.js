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
exports.getTenants = exports.connectToISC = exports.disconnectFromISC = void 0;
const sailpoint_api_client_1 = require("sailpoint-api-client");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const keytar = require("keytar");
const os = require("os");
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
const connectToISC = (apiUrl, baseUrl, clientId, clientSecret) => __awaiter(void 0, void 0, void 0, function* () {
    let config = {
        clientId: clientId,
        clientSecret: clientSecret,
        tokenUrl: apiUrl + `/oauth/token`,
        baseurl: apiUrl
    };
    try {
        let apiConfig = new sailpoint_api_client_1.Configuration(config);
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