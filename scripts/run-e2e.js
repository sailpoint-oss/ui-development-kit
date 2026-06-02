const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const electronDir = path.join(__dirname, '..', 'node_modules', 'electron');
const pathFile = path.join(electronDir, 'path.txt');

function run(command, args) {
  const result = childProcess.spawnSync(command, args, {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function getElectronExecutablePath() {
  if (!fs.existsSync(pathFile)) {
    return undefined;
  }

  const relativeExecutablePath = fs.readFileSync(pathFile, 'utf8');
  const executablePath = path.join(electronDir, 'dist', relativeExecutablePath);

  return fs.existsSync(executablePath) ? executablePath : undefined;
}

if (!getElectronExecutablePath()) {
  if (process.env.CI) {
    console.log('Electron executable is not installed; skipping Electron launch smoke test in CI.');
    process.exit(0);
  }

  run(process.execPath, [path.join('scripts', 'ensure-electron-installed.js')]);
}

run(process.platform === 'win32' ? 'npx.cmd' : 'npx', [
  'playwright',
  'test',
  '-c',
  path.join('e2e', 'playwright.config.ts'),
  'e2e/',
]);
