const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  // pageLoadTimeout: 500,
  environment: 'QA',
  screenshotsFolder: "cypress/reports/screenshots",
  videosFolder: "cypress/reports/videos",
  video: true,
  e2e: {
    specPattern: ['**/*.feature', '**/*.cy.js'],
    experimentalStudio: true,
    defaultCommandTimeout: 10_000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    async setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        },
      })
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }),
      )
      return config
    },
    env: {
    }
  },
});