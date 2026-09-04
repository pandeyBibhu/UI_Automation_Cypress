
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    env: {
      environment: 'QA_Rahul',
      
    },

    setupNodeEvents(on, config) {

      const environment = config.env.environment;

      if (environment === 'QA_Rahul') {
        config.baseUrl = "https://rahulshettyacademy.com/",
          config.env.username = "standard_user",
          config.env.password = "secret_sauce"
      }
      else if (environment === 'HRM') {
        config.baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          config.env.username = "Admin",
          config.env.password = "admin123"
      }
      else if (environment === 'QA_SwagLabs') {
        config.baseUrl = "https://www.saucedemo.com/",
          config.env.username = "standard_user",
          config.env.password = "secret_sauce"
      }
      return config;
    },
  }
});
