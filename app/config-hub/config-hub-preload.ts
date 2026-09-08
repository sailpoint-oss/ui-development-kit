const { ipcRenderer: ipcMain } = require('electron');

export const configHubPreloader = {
  setConfigHubGitToken: (token: string) => ipcMain.invoke('config-hub-set-git-token', token),
  deleteConfigHubGitToken: () => ipcMain.invoke('config-hub-delete-git-token'),
  hasConfigHubGitToken: () => ipcMain.invoke('config-hub-has-git-token'),
  configHubGitHubRequest: (apiPath: string) => ipcMain.invoke('config-hub-github-request', apiPath),
};
