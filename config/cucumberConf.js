// An example configuration file.


exports.config = {
  directConnect: true,
 // seleniumAddress: 'http://localhost:4444/wd/hub',

  //baseUrl: 'https://angularjs.org/',   
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  //framework: 'jasmine',
  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../feature/test.feature'],

  // Options to be passed to Jasmine.

  cucumberOpts: {
    require: ['../cucumberStep/testStepDef.js'],  // require step definition files before executing features
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    format: ['json:./results.json'],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: [] 
    //timeout: '60000'                 // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

 onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
  
};
