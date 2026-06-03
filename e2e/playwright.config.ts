/** @type {import('@playwright/test').PlaywrightTestConfig} */
const isCI = !!process.env.CI;

const config = {
  testDir: '.',
  timeout: isCI ? 120000 : 45000,
  outputDir: './screenshots',
  retries: isCI ? 1 : 0,
  workers: isCI ? 1 : undefined,
  use: {
    headless: isCI,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: isCI ? 0 : 1000,
    },
    trace: 'on',
  },
  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
module.exports = config;
