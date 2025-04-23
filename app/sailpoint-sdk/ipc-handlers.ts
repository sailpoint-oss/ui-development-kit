import { ipcMain } from 'electron';
import { getTransforms, createTransform, updateTransform } from './sailpoint-sdk';
import { apiConfig } from '../api';

export function setupSailPointSDKHandlers() {
  ipcMain.handle('get-transforms', async () => {
    return await getTransforms(apiConfig);
  });

  ipcMain.handle('create-transform', async (event, request) => {
    return await createTransform(apiConfig, request);
  });

  ipcMain.handle('update-transform', async (event, request) => {
    return await updateTransform(apiConfig, request);
  });

}