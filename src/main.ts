import windowStateManager from "electron-window-state";
import { app, BrowserWindow } from "electron";
import path from "path";
import { is } from "@electron-toolkit/utils";
import express from "express";
import log from "electron-log/main";

const handlerPkg = import(
  is.dev
    ? "./build/handler.js"
    : `file://${path.join(process.resourcesPath, "build", "handler.js")}`
);

// Assign the log functions so you get global logging to file by default in dev and production

// By default, it writes logs to the following locations:
// on Linux: ~/.config/{app name}/logs/main.log
// on macOS: ~/Library/Logs/{app name}/main.log
// on Windows: %USERPROFILE%\AppData\Roaming\{app name}\logs\main.log
Object.assign(console, log.functions);

console.log("===Log Start===");

const port = process.env.port || 3000;
const origin = process.env.origin || `http://localhost:${port}`;

console.log(`Express Server will be running on ${origin}...`);

const server = express();

const createServer = async () => {
  try {
    console.log("Importing handler...");
    const { handler } = await handlerPkg;

    // add a route that lives separately from the SvelteKit app
    server.get("/healthcheck", (req, res) => {
      console.log("Healthcheck route hit");
      res.end("ok");
    });

    console.log("Adding handler to server...");
    // let SvelteKit handle everything else, including serving prerendered pages and static assets
    server.use(handler);

    console.log("Starting server...");
    server.listen(port, () => {
      console.log(`Server listening on ${origin}`);
    });
  } catch (e) {
    console.log(e);
  }
};

createServer();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  console.log("Creating window...");
  // Create the browser window.
  try {
    let windowState = windowStateManager({
      defaultWidth: 1920,
      defaultHeight: 1080,
    });

    const mainWindow = new BrowserWindow({
      show: false,
      backgroundColor: "whitesmoke",
      titleBarStyle: "default",
      autoHideMenuBar: false,
      trafficLightPosition: {
        x: 17,
        y: 32,
      },
      minHeight: 800,
      minWidth: 800,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: true,
        spellcheck: false,
        devTools: true,
      },
      x: windowState.x,
      y: windowState.y,
      width: windowState.width,
      height: windowState.height,
    });

    // If the window failed to load the given url, wait 500ms and try again
    mainWindow.webContents.on("did-fail-load", function () {
      console.log("did-fail-load");
      setTimeout(() => {
        mainWindow.loadURL(origin);
      }, 500);
    });

    console.log("Opening server in window...");
    // and load the index.html of the app.
    mainWindow.loadURL(origin);

    mainWindow.once("ready-to-show", () => {
      mainWindow.show();
      mainWindow.focus();
    });

    mainWindow.on("close", () => {
      windowState.saveState(mainWindow);
    });

    // If dev, Open the DevTools.
    if (is.dev) mainWindow.webContents.openDevTools();
  } catch (e) {
    console.log("Error creating window");
    console.log(e);
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
