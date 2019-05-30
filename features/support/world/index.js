const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';
const emailAddress = ("mohinakhtar@hotmail.com");
const myPassword = ("mohin123");
function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

class CustomWorld {
 

 goToJobsPage() {
    return this.driver.get(BASE_URL);
    this.driver.set
  }



  start() {
    this.driver = buildDriver();
  }

clickSignIn() {
 return a = this.driver.findElement(By.linkText("Sign in"));
 this.driver.click(a);
}

clickUsername() {
 return a = this.driver.findElement(By.id("signinemail"));
 this.driver.click(a).value=(emailAddress);
}

clickPassword() {
 return a = this.driver.findElement(By.id("signinpassword"));
 this.driver.click(a).value=(myPassword);
}

clickSignIn() {
 return a = this.driver.findElement(By.linkText("Sign In"));
 this.driver.click(a);
}

clickCreateAccount() {
 return a = this.driver.findElement(By.linkText("Create account"));
 this.driver.click(createAccount);
}

clcikTitle(){
 return a = this.driver.findElement(By.id("title"));
 this.driver.click(a);
}

clickFirstName(){
 return a = this.driver.findElement(By.id("firstname"));
 this.driver.click(a);
}

clickLastName(){
return a = this.driver.findElement(By.id("lastname"));
this.driver.click(a);
}

clickEmailAddress(){
return a = this.driver.findElement(By.id("emailaddress"));
this.driver.click(a);
}

clickPassword(){
 return a = this.driver.findElement(By.id("regpassword"));
this.driver.click(a);
}

clickReEnterPassword(){
 return a = this.driver.findElement(By.id("confirmpassword"));
this.driver.click(a);
}

clickTandC(){
return a = this.driver.findElement(By.id("agreeTermsAndConds"));
this.driver.click(a);
}



  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
