const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  connectToISC: (apiUrl, baseUrl, clientId, clientSecret) => ipcRenderer.invoke('connect-to-isc', apiUrl, baseUrl, clientId, clientSecret),
  disconnectFromISC: () => ipcRenderer.invoke('disconnect-from-isc'),
  getTenants: () => ipcRenderer.invoke('get-tenants'),
  getTransforms: () => ipcRenderer.invoke('get-transforms'),
  createTransform: (request) => ipcRenderer.invoke('create-transform', request),
  updateTransform: (request) => ipcRenderer.invoke('update-transform', request),
  harborPilotTransformChat: (chat) => ipcRenderer.invoke('harbor-pilot-transform-chat', chat),
});