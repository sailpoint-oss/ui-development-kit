import { test, expect } from '@playwright/test';
import { spawn } from 'child_process';
import * as FS from 'fs';
import * as PATH from 'path';

const electronExecutablePath = PATH.join(
  __dirname,
  '..',
  'node_modules',
  'electron',
  'dist',
  FS.readFileSync(PATH.join(__dirname, '..', 'node_modules', 'electron', 'path.txt'), 'utf8')
);

test.describe('Check Home Page', () => {
  test('Launch electron app', async () => {
    const appProcess = spawn(electronExecutablePath, [PATH.join(__dirname, '../electron-dist/main.js')], {
      cwd: PATH.join(__dirname, '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    const stderr: string[] = [];
    appProcess.stderr.on('data', (chunk: Buffer) => stderr.push(chunk.toString()));

    const exitCode = await Promise.race<number | null | 'running'>([
      new Promise((resolve) => appProcess.once('exit', (code) => resolve(code))),
      new Promise((resolve) => setTimeout(() => resolve('running'), 10000)),
    ]);

    if (!appProcess.killed) {
      appProcess.kill();
    }

    expect(exitCode, stderr.join('')).toBe('running');
  });

  // test('Check Home Page design', async ({ browserName}) => {
  //   // Uncomment if you change the design of Home Page in order to create a new screenshot
  //   const screenshot = await firstWindow.screenshot({ path: '/tmp/home.png' });
  //   expect(screenshot).toMatchSnapshot(`home-${browserName}.png`);
  // });

  // test('Check title', async () => {
  //   const elem = await firstWindow.$('app-home h1');
  //   const text = elem ? await elem.innerText() : null;
  //   expect(text).toBe('App works !');
  // });
});
