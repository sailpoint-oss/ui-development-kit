const fs = require('fs');
const { createRequire } = require('module');
const os = require('os');
const path = require('path');

const electronDir = path.join(__dirname, '..', 'node_modules', 'electron');
const electronRequire = createRequire(path.join(electronDir, 'package.json'));
const { downloadArtifact } = electronRequire('@electron/get');
const extract = electronRequire('extract-zip');
const pathFile = path.join(electronDir, 'path.txt');
const distPath = path.join(electronDir, 'dist');
const { version } = require(path.join(electronDir, 'package.json'));

const platformPathByOs = {
  darwin: path.join('Electron.app', 'Contents', 'MacOS', 'Electron'),
  linux: 'electron',
  win32: 'electron.exe',
};

const platformPath = platformPathByOs[os.platform()];

if (!platformPath) {
  throw new Error(`Unsupported Electron platform: ${os.platform()}`);
}

async function installElectron() {
  delete process.env.ELECTRON_SKIP_BINARY_DOWNLOAD;

  const zipPath = await downloadArtifact({
    version,
    artifactName: 'electron',
    force: true,
    checksums: require(path.join(electronDir, 'checksums.json')),
    platform: os.platform(),
    arch: process.arch,
  });

  fs.rmSync(distPath, { recursive: true, force: true });
  await extract(zipPath, { dir: distPath });

  fs.writeFileSync(pathFile, platformPath);

  const electronPath = require('electron');

  if (!fs.existsSync(electronPath)) {
    throw new Error(`Electron executable was not found at ${electronPath}`);
  }

  if (os.platform() !== 'win32') {
    fs.chmodSync(electronPath, 0o755);
  }

  console.log(`Electron executable ready at ${electronPath}`);
}

installElectron().catch((error) => {
  console.error(error);
  process.exit(1);
});
