// const { defineConfig } = require('cypress')
import { defineConfig } from "cypress";
import fs from "fs-extra";
// import { configurePlugin } from "cypress-mongodb";

export default defineConfig({
  env: {
    newbornUrl: 'http://5.189.186.217',
    guruTestingUrl:'https://www.guru99.com',
    mongodb: {
      uri: 'mongodb://127.0.0.1:27017',
      database: 'test',
    },
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
    on('task', {log(message) {console.log(message); return null}})
    on('task', {saveUrl(url) {fs.writeFileSync('url.json', JSON.stringify(url)); return null}})
    // const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
    // config.baseUrl = newUrl

    on("before:browser:launch", (browser, LaunchOptions) => {
      console.log(LaunchOptions.args);
      if (browser.name === "chwome") {
        LaunchOptions.args.push("--incognito");
      }
      return LaunchOptions
    })
    return config
  },
},
})

// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     experimentalStudio: true,
//     viewportHeight: 900,
//     viewportWidth: 1400,
//     defaultCommandTimeout: 4000,
//     // baseUrl: 'https://www.cypress.io',
//     retries: {
//       openMode: 1,
//       runMode: 1,
//     },
//     // specPattern: 'cypress/e2e/myTests/*.cy.js',
//     setupNodeEvents(on, config) {
//       on('task', { log(message) { console.log(message); return null } })
//       on('task', { saveUrl(url) { fs.writeFileSync('url.json', JSON.stringify(url)); return null } })
//       const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
//       config.baseUrl = newUrl

//       on("before:browser:launch", (browser, launchOptions) => {
//         console.log(launchOptions.args);
//         if (browser.name === "chrome") {
//           launchOptions.args.push("--incognito");
//         }
//         return launchOptions;
//       });

//       configurePlugin(on)

//       on('before:run', async (details) => {
//         console.log('override before:run');
//         await beforeRunHook(details);
//       });

//       on('after:run', async () => {
//         console.log('override after:run');
//         await afterRunHook();
//       });

//       return config
//     },
//   },
// })

