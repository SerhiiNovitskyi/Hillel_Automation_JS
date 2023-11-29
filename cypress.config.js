// const { defineConfig } = require('cypress')
import { defineConfig } from "cypress";
import fs from "fs-extra";
import { configurePlugin } from "cypress-mongodb";
import lib from 'cypress-mochawesome-reporter/lib/index.js'

const { beforeRunHook, afterRunHook } = lib

export default defineConfig({
  env: {
    newbornUrl: 'http://5.189.186.217',
    guruTestingUrl: 'https://www.guru99.com',
    mongoTestingUrl: 'http://localhost:3000',
    mongodb: {
      uri: 'mongodb://127.0.0.1:27017',
      database: 'test',
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'HTML reports created by AQA wizard',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 1,
      runMode: 1,
    },
    setupNodeEvents(on, config) {
      on('task', { log(message) { console.log(message); return null } })
      on('task', { saveUrl(url) { fs.writeFileSync('url.json', JSON.stringify(url)); return null } })
      // const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
      // config.baseUrl = newUrl

      on("before:browser:launch", (browser, LaunchOptions) => {
        console.log(LaunchOptions.args);
        if (browser.name === "chwome") {
          LaunchOptions.args.push("--incognito");
        }
        return LaunchOptions
      })
      configurePlugin(on)

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

      return config
    },
  },
});
