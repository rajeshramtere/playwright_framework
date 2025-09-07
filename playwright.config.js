// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir: './tests',
  timeout: 40000,
  expect : {
    timeout : 50000,
  },

  reporter : "html",
  use: {
    browserName : "chromium",
    headless: false // Run browser in headed mode
  }
});

module.exports = config;

