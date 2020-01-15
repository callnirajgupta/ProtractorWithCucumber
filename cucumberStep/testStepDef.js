let homepage=require('../pages/homepage.js');
const { Before, Given, When, Then } = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
Before({timeout: 60 * 1000}, function() {
    setDefaultTimeout(60 * 1000);
    });  
Given('enter the url', async() => {
    // Write code here that turns the phrase above into concrete actions
    const EC = protractor.ExpectedConditions;
    browser.ignoreSynchronization = true;
      await browser.get('http://automationpractice.com/index.php');
        
      await browser.wait(EC.elementToBeClickable($('a[class="login"]')), 10000);
        
      //const emailInputField = $$('.mat-form-field-infix>input').get(1);
      await element(by.css('a[class="login"]')).click();
  });

  When('user enter username and password', async() => {
    // Write code here that turns the phrase above into concrete actions
    homepage.waitforelement();

    homepage.enteremail('callnirajgupta@gmail');
    homepage.enterpassword('password');
    homepage.clicklogin();
  });

  Then('user is login successfully', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('the step is pending');
  });