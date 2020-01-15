    let homepage=function(){
    let sign=element(by.css('a[class="login"]'));
    let email=element(by.css('#email'));
    let password=element(by.css('#passwd'));
    let login=element(by.css('#SubmitLogin'));
    const EC = protractor.ExpectedConditions;
  

    this.waitforelement=async() =>{
        await browser.wait(EC.elementToBeClickable($('#email')), 10000)

    };

    this.enteremail=async(emailid)=>{
        await email.sendKeys(emailid);

    };
    this.enterpassword=async(pwd)=>{
        await  password.sendKeys(pwd);
        
    };

    this.clicklogin=async()=>{
        //await browser.executeScript("arguments[0].scrollIntoView();", login);
        await login.click();

    };

};
module.exports= new homepage();