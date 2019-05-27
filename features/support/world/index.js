const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

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


clickCreateAccount() {//
 return driver.findElement(By.linkText("Create account"));
 driver.click(createAccount);
}

clcikTitle(){
 return a = driver.findElement(By.id("title"));
 driver.click(a);
}

clickFirstName(){
 return a = driver.findElement(By.id("firstname"));
 driver.click(a);
}

clickLastName(){
return a = driver.findElement(By.id("lastname"));
driver.click(a);
}

clickEmailAddress(){
return a = driver.findElement(By.id("emailaddress"));
driver.click(a);
}

clickPassword(){
 return a = driver.findElement(By.id("regpassword"));
driver.click(a);
}

clickReEnterPassword(){
 return a = driver.findElement(By.id("confirmpassword"));
driver.click(a);
}

clickTandC(){
return a = driver.findElement(By.id("agreeTermsAndConds"));
driver.click(a);
}



  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
