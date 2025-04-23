const { ipcRenderer } = require('electron');

const sdkPreload = {
  getTransforms: () => ipcRenderer.invoke('get-transforms'),
  createTransform: (request) => ipcRenderer.invoke('create-transform', request),
  updateTransform: (request) => ipcRenderer.invoke('update-transform', request),
};

module.exports = sdkPreload;