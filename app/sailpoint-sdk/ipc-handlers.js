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
exports.setupSailPointSDKHandlers = setupSailPointSDKHandlers;
const electron_1 = require("electron");
const sailpoint_sdk_1 = require("./sailpoint-sdk");
const api_1 = require("../api");
function setupSailPointSDKHandlers() {
    electron_1.ipcMain.handle('get-transforms', () => __awaiter(this, void 0, void 0, function* () {
        return yield (0, sailpoint_sdk_1.getTransforms)(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-transform', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield (0, sailpoint_sdk_1.createTransform)(api_1.apiConfig, request);
    }));
    electron_1.ipcMain.handle('update-transform', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield (0, sailpoint_sdk_1.updateTransform)(api_1.apiConfig, request);
    }));
}
//# sourceMappingURL=ipc-handlers.js.map