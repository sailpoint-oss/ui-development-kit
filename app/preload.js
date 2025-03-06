const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  connectToISC: (port) => ipcRenderer.invoke('connect-to-isc', port),
  disconnectFromISC: () => ipcRenderer.invoke('disconnect-from-isc'),
  getTenants: () => ipcRenderer.invoke('get-tenants'),
});