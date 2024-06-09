const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
