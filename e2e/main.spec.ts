import { _electron as electron } from 'playwright';
import type { ElectronApplication, Page } from 'playwright';
import { test, expect } from '@playwright/test';
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
  let app: ElectronApplication;
  let firstWindow: Page;

  test.beforeAll( async () => {
    app = await electron.launch({ 
      executablePath: electronExecutablePath,
      args: [PATH.join(__dirname, '../electron-dist/main.js')],
      cwd: PATH.join(__dirname, '..'),
      timeout: 30000
    });
    firstWindow = await app.firstWindow({ timeout: 15000 });
    await firstWindow.waitForLoadState('domcontentloaded', { timeout: 15000 });
  });

  test('Launch electron app', async () => {

    const windowState: { isVisible: boolean; isDevToolsOpened: boolean; isCrashed: boolean } = await app.evaluate((process) => {
      const mainWindow = process.BrowserWindow.getAllWindows()[0];

      return {
        isVisible: mainWindow.isVisible(),
        isDevToolsOpened: mainWindow.webContents.isDevToolsOpened(),
        isCrashed: mainWindow.webContents.isCrashed(),
      };
    });

    expect(windowState.isVisible).toBeTruthy();
    expect(windowState.isDevToolsOpened).toBeFalsy();
    expect(windowState.isCrashed).toBeFalsy();
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

  test.afterAll(() => {
    if (app) {
      app.process().kill();
    }
  });
});
