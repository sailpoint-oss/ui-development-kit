const { contextBridge, ipcRenderer: ipcMain } = require('electron');
const sdkPreloader = require('./sailpoint-sdk/sdk-preload');

contextBridge.exposeInMainWorld('electronAPI', {
  connectToISC: (apiUrl: any, baseUrl: any, clientId: any, clientSecret: any) => ipcMain.invoke('connect-to-isc', apiUrl, baseUrl, clientId, clientSecret),
  disconnectFromISC: () => ipcMain.invoke('disconnect-from-isc'),
  getTenants: () => ipcMain.invoke('get-tenants'),
  harborPilotTransformChat: (chat: any) => ipcMain.invoke('harbor-pilot-transform-chat', chat),
  ...sdkPreloader
});