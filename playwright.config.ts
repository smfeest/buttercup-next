import { defineConfig, devices } from "@playwright/test";

const baseURL = `http://localhost:${process.env.PORT || 3000}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  maxFailures: process.env.CI ? 10 : 0,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : "50%",
  use: {
    baseURL,
    locale: "en-GB",
    timezoneId: "Europe/London",
    trace: "on-first-retry",
  },
  expect: {
    timeout: 1000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
