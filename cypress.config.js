
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    env: {
      environment: 'QA_Rahul',
      baseURL: "https://www.saucedemo.com/",
      username: "standard_user",
      password: "secret_sauce"
    },

    setupNodeEvents(on, config) {

      const environment = config.env.environment || 'HRM';

      if (environment === 'QA_Rahul') {
        config.env.baseURL = "https://www.saucedemo.com/",
          config.env.username = "standard_user",
          config.env.password = "secret_sauce"
      }
      else if (environment === 'HRM') {
        config.env.baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          config.env.username = "Admin",
          config.env.password = "admin123"
      }
      return config;
    },
  }
});
