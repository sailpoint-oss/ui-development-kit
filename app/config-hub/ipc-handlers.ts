import { ipcMain } from 'electron';
import { deleteGitToken, githubApiRequest, hasGitToken, setGitToken } from './git-token';

export function setupConfigHubHandlers() {
  ipcMain.handle('config-hub-set-git-token', (event, token: string) => {
    return setGitToken(token);
  });

  ipcMain.handle('config-hub-delete-git-token', () => {
    return deleteGitToken();
  });

  ipcMain.handle('config-hub-has-git-token', () => {
    return hasGitToken();
  });

  ipcMain.handle('config-hub-github-request', async (event, apiPath: string) => {
    return githubApiRequest(apiPath);
  });
}
