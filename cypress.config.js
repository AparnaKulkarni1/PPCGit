const cypress = require("cypress");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs')
module.exports = (on, config) => {
  require("cypress-localstorage-commands/plugin")(on, config);
  return config;
};
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on('task', {
  fileExists(path) { // there is a name and arguments for a task
    return fs.existsSync(path)
  },
})
//on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
return config;
}
module.exports = defineConfig({
 // chromeWebSecurity: false,
  //experimentalSourceRewriting: true,
  experimentalModifyObstructiveThirdPartyCode : true,
  video: true,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: true,
 // experimentalSkipDomainInjection : true,
  env :
  {
    // regionname : "test_062023_38",
    // username : "pimadmini@codifyd.com",
    // password : "Riversand@2022",
    // assert_var : "shamrockds",
   username: "navistarfs@riversand.com",
   password :"qEnm&b1A87a1",
   assert_var : "navistar",
  },
  e2e: {
  //  baseUrl: "https://shamrockds.riversand.com",
   // baseUrl: "https://navistarfs.riversand.com/",
    chromeWebSecurity : false,
    experimentalStudio : true,
    experimentalOriginDependencies : true,
    experimentalOriginDependencies : true,
   // specPattern: "cypress/integration/examples/Step_BDD/*.feature",
   specPattern:'cypress/integration/examples/*.js',
 // specPattern: "cypress/integration/examples",
  
    //defaultCommandTimeout: 30000,
    pageLoadTimeout: 300000,
    includeShadowDom : true,
    setupNodeEvents,
  },
});





