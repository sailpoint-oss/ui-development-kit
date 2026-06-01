const childProcess = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const electronDir = path.join(__dirname, '..', 'node_modules', 'electron');
const installScript = path.join(electronDir, 'install.js');
const pathFile = path.join(electronDir, 'path.txt');

const platformPathByOs = {
  darwin: path.join('Electron.app', 'Contents', 'MacOS', 'Electron'),
  linux: 'electron',
  win32: 'electron.exe',
};

const platformPath = platformPathByOs[os.platform()];

if (!platformPath) {
  throw new Error(`Unsupported Electron platform: ${os.platform()}`);
}

const installEnv = {
  ...process.env,
  force_no_cache: 'true',
};
delete installEnv.ELECTRON_SKIP_BINARY_DOWNLOAD;

childProcess.execFileSync(process.execPath, [installScript], {
  stdio: 'inherit',
  env: installEnv,
});

if (!fs.existsSync(pathFile)) {
  fs.writeFileSync(pathFile, platformPath);
}

const electronPath = require('electron');

if (!fs.existsSync(electronPath)) {
  throw new Error(`Electron executable was not found at ${electronPath}`);
}

console.log(`Electron executable ready at ${electronPath}`);
