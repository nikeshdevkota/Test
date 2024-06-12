const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "19go9d",
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
