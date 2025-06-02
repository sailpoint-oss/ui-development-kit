const { contextBridge, ipcRenderer } = require('electron');
const sdkPreload = require('./sailpoint-sdk/sdk-preload');

contextBridge.exposeInMainWorld('electronAPI', {
  connectToISC: (apiUrl, baseUrl, clientId, clientSecret) => ipcRenderer.invoke('connect-to-isc', apiUrl, baseUrl, clientId, clientSecret),
  disconnectFromISC: () => ipcRenderer.invoke('disconnect-from-isc'),
  getTenants: () => ipcRenderer.invoke('get-tenants'),
  harborPilotTransformChat: (chat) => ipcRenderer.invoke('harbor-pilot-transform-chat', chat),
  oauthLogin: (tenant, baseAPIUrl) => ipcRenderer.invoke('oauth-login', tenant, baseAPIUrl),
  createOrUpdateEnvironment: (config) => ipcRenderer.invoke('create-or-update-environment', config),
  deleteEnvironment: (environmentName) => ipcRenderer.invoke('delete-environment', environmentName),
  setActiveEnvironment: (environmentName) => ipcRenderer.invoke('set-active-environment', environmentName),
  ...sdkPreload
});