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
const disconnectFromISC = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.disconnectFromISC = disconnectFromISC;
const connectToISC = (tenantUrl, clientId, clientSecret) => __awaiter(void 0, void 0, void 0, function* () {
    let config = {
        clientId: clientId,
        clientSecret: clientSecret,
        tokenUrl: `https://${tenantUrl}.api.identitynow.com/oauth2/token`
    };
    let apiConfig = new sailpoint_api_client_1.Configuration(config);
    let tenantApi = new sailpoint_api_client_1.TenantV2024Api(apiConfig);
    let response = yield tenantApi.getTenant();
    return { connected: true, name: response.data.fullName };
});
exports.connectToISC = connectToISC;
const getTenants = () => __awaiter(void 0, void 0, void 0, function* () {
    return [{ tenantUrl: 'test', authUrl: 'test', clientId: 'test', clientSecret: 'test' }];
});
exports.getTenants = getTenants;
//# sourceMappingURL=api.js.map