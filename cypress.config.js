const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5001',
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/*.js",
  },
});