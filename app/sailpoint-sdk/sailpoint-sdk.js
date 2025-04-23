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
exports.updateTransform = exports.createTransform = exports.getTransforms = void 0;
const sailpoint_api_client_1 = require("sailpoint-api-client");
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
function generateErrorResponse(error) {
    if (error instanceof Error) {
        return {
            data: [],
            status: 500,
            statusText: error.message,
            headers: {},
        };
    }
    return {
        data: [],
        status: 500,
        statusText: 'Unknown error occurred',
        headers: {},
    };
}
const getTransforms = (apiConfig) => {
    const transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
    return handleApiCall(() => transformsApi.listTransforms());
};
exports.getTransforms = getTransforms;
const createTransform = (apiConfig, request) => {
    const transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
    return handleApiCall(() => transformsApi.createTransform(request));
};
exports.createTransform = createTransform;
const updateTransform = (apiConfig, request) => {
    const transformsApi = new sailpoint_api_client_1.TransformsV2024Api(apiConfig);
    return handleApiCall(() => transformsApi.updateTransform(request));
};
exports.updateTransform = updateTransform;
//# sourceMappingURL=sailpoint-sdk.js.map