import windowStateManager from 'electron-window-state';
import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import log from 'electron-log/main';
import { start, load } from 'adapter-electron/functions';
import path from 'node:path';
import ess from 'electron-squirrel-startup';

Object.assign(console, log.functions);

log.info('Hello, log!');
const port = await start();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (ess) {
	app.quit();
}

const createWindow = () => {
	console.log('Creating window...');
	// Create the browser window.
	try {
		const windowState = windowStateManager({
			defaultWidth: 1920,
			defaultHeight: 1080
		});

		const mainWindow = new BrowserWindow({
			show: false,
			backgroundColor: 'whitesmoke',
			titleBarStyle: 'default',
			autoHideMenuBar: false,
			trafficLightPosition: {
				x: 17,
				y: 32
			},
			minHeight: 800,
			minWidth: 800,
			webPreferences: {
				contextIsolation: true,
				nodeIntegration: true,
				spellcheck: false,
				devTools: true,
				preload: path.join(__dirname, '../preload/index.mjs')
			},
			x: windowState.x,
			y: windowState.y,
			width: windowState.width,
			height: windowState.height
		});

		// Load the local URL for development or the local
		// html file for production
		load(mainWindow, port);

		if (isDev) mainWindow.webContents.openDevTools();

		mainWindow.once('ready-to-show', () => {
			mainWindow.show();
			mainWindow.focus();
		});

		mainWindow.on('close', () => {
			windowState.saveState(mainWindow);
		});
	} catch (e) {
		console.log('Error creating window');
		console.log(e);
	}
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
