1.npm install -g protractor
2.where protractor
3.webdriver-manager update -- browser driver added to node_module
4.  find config.js go to npm-->node_module--protractor->example

npm install -g cucumber

npm install --save-dev protractor-cucumber-framework

Set the 'framework' property to custom by adding framework: 'custom' and frameworkPath: 'protractor-cucumber-framework' to the conf file

install--npm i cucumber-html-reporter
then create index.js file


var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'test/report/cucumber_report.json',
        output: 'test/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);

Then run node index.js