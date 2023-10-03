const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportHeight: 700,
    viewportWidth: 1400,
    baseUrl: 'https://www.cypress.io/',
    retries: {
      openMode: 1,
      runMode: 3
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
