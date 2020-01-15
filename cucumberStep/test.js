let homepage=require('../pages/homepage.js');

describe('angular-material input component page', function() {
    const EC = protractor.ExpectedConditions;
  
    it('Should change input component value', async() => {
      browser.ignoreSynchronization = true;
      await browser.get('http://automationpractice.com/index.php');
        
      await browser.wait(EC.elementToBeClickable($('a[class="login"]')), 5000);
        
      //const emailInputField = $$('.mat-form-field-infix>input').get(1);
      await element(by.css('a[class="login"]')).click();
        
   
      //await browser.wait(EC.elementToBeClickable($('#email')), 5000);
        homepage.waitforelement();

        homepage.enteremail('callnirajgupta@gmail');
        homepage.enterpassword('password');
        homepage.clicklogin();


      
      
   
    });
  });