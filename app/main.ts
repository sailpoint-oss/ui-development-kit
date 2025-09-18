import { app, BrowserWindow, ipcMain, screen, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
import { setupSailPointSDKHandlers } from './sailpoint-sdk/ipc-handlers';
import { disconnectFromISC, refreshTokens, unifiedLogin, validateTokens, checkAccessTokenStatus, getCurrentTokenDetails, checkOauthCodeFlowComplete } from './authentication/auth';
import { deleteEnvironment, getTenants, setActiveEnvironment, updateEnvironment, UpdateEnvironmentRequest } from './authentication/config';
// Global variables
let win: BrowserWindow | undefined;

const args = process.argv.slice(1);
const serve = args.some((val) => val === '--serve');

// Utility functions
function getConfigPath(): string {
  const userDataPath = app.getPath('userData');
  const configPath = path.join(userDataPath, 'config.json');
  return configPath;
}

function ensureConfigDir(): void {
  const configPath = getConfigPath();
  const configDir = path.dirname(configPath);

  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
}

// Main window creation
function createWindow(): BrowserWindow {
  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width / 2,
    height: size.height / 2,
    autoHideMenuBar: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      allowRunningInsecureContent: serve,
      contextIsolation: true,
    },
  });

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url); // Open URL in user's browser
    return { action: 'deny' }; // Prevent the app from opening the URL
  });

  if (serve) {
    (async () => {
      try {
        const ignoredPath = path.join(
          __dirname,
          '..',
          'src',
          'assets',
          'icons',
          '*'
        );
        console.log('Ignoring reload on:', ignoredPath);
        require('electron-reloader')(module, {});
      } catch (err) {
        console.error('Failed to enable reloader:', err);
      }
    })();
    win.loadURL('http://localhost:4200');
  } else {
    // Path when running electron executable
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      // Path when running electron in local folder
      pathIndex = '../dist/index.html';
    }

    const indexPath = url.format({
      pathname: path.join(__dirname, pathIndex),
      protocol: 'file:',
      slashes: true,
    });

    win.loadURL(indexPath);
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = undefined;
  });

  return win;
}

try {
  //#region Main event handlers

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindow, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  //#endregion

  //#region Custom IPC handlers


  ipcMain.handle('unified-login', async (event, environment: string) => {
    return unifiedLogin(environment);
  });

  ipcMain.handle('disconnect-from-isc', () => {
    return disconnectFromISC();
  });

  ipcMain.handle('check-access-token-status', async (event) => {
    return checkAccessTokenStatus();
  });

  ipcMain.handle('get-current-token-details', async (event, environment: string) => {
    return getCurrentTokenDetails(environment);
  });



  ipcMain.handle('refresh-tokens', async (event) => {
    return refreshTokens();
  });

  ipcMain.handle('validate-tokens', async (event, environment: string) => {
    return validateTokens(environment);
  });

  ipcMain.handle('check-oauth-code-flow-complete', async (event, uuid: string, environment: string) => {
    return checkOauthCodeFlowComplete(uuid, environment);
  });

  ipcMain.handle('get-tenants', () => {
    return getTenants();
  });

  ipcMain.handle('update-environment', (event, config: UpdateEnvironmentRequest) => {
    return updateEnvironment(config);
  });

  ipcMain.handle(
    'delete-environment',
    (event, environment: string) => {
      return deleteEnvironment(environment);
    }
  );

  ipcMain.handle(
    'set-active-environment',
    (event, environment: string) => {
      return setActiveEnvironment(environment);
    }
  );

  ipcMain.handle('read-config', async () => {
    try {
      const configPath = getConfigPath();
      if (fs.existsSync(configPath)) {
        const configData = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(configData);
      } else {
        let defaultConfig;
        const appConfigPath = path.join(process.resourcesPath, 'assets/config.json')
        
        try {
          if (fs.existsSync(appConfigPath)) {
            const appConfigData = fs.readFileSync(appConfigPath, 'utf-8');
            defaultConfig = JSON.parse(appConfigData);
            console.log('Using config from app resources:', appConfigPath);
          } else {
            // Default configuration with components and themes
            defaultConfig = {
              components: {
                enabled: ['component-selector'],
              },
              themes: {
                light: {
                  primary: "#0071ce",
                  secondary: "#6c63ff",
                  primaryText: "#415364",
                  secondaryText: "#415364",
                  hoverText: "#ffffff",
                  background: "#ffffff",
                  logo: "assets/icons/logo.png",
                },
                dark: {
                  primary: "#54c0e8",
                  secondary: "#f48fb1",
                  primaryText: "#ffffff",
                  secondaryText: "#cccccc",
                  hoverText: "#54c0e8",
                  background: "#151316",
                  logo: "assets/icons/logo-dark.png"
                }
              },
              currentTheme: "light",
              version: '1.0.0',
            };
            console.log('Using hardcoded default config');
          }
        } catch (configError) {
          console.error('Error reading app config:', configError);
          // Fallback default configuration
          defaultConfig = {
            components: {
              enabled: ['component-selector'],
            },
            version: '1.0.0',
          };
        }

        ensureConfigDir();
        fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
        return defaultConfig;
      }
    } catch (error) {
      console.error('Error reading config file:', error);
      throw new Error('Failed to read config file');
    }
  });

  ipcMain.handle('write-config', async (event, config) => {
    try {
      const configPath = getConfigPath();
      console.log('Writing config to:', configPath);
      ensureConfigDir();
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      return { success: true };
    } catch (error) {
      console.error('Error writing config file:', error);
      throw new Error('Failed to write config file');
    }
  });

  //#endregion

  // Populate SDK handlers
  setupSailPointSDKHandlers();

} catch (e) {
  console.error('Error during app initialization', e);
}
