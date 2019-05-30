const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


//creating account

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Given(/^i click on create account$/, () => world.clickCreateAccount()); //function clicks on create account

Then(/^then i should see the create accounts page$/, async () => {
  return World.driver.findElement(By.id('main'));
})

Given(/^i click on title$/, () => World.clickTitle()); //function clicks on title in the create accounts page

Then(/^i should enter my title$/, async () => {
  return World.driver.type("Mr"); //here i use the type method to eneter "Mr as the value in the current field 
})

Given(/^i click on first name$/, () => World.clickFirstName()); //function clicks on first name field

Then(/^i should write my first name$/, async () => {
  return World.driver.type("Mohin"); //type method is used to eneter a string value "Mohin" in the current target field 
})

Given(/^i click on surname$/, () => World.clickLastName()); //function clicks on last name field

Then(/^i should write my surname$/, async () => {
  return World.driver.type("Akhtar"); //type method is used to insert the string alue "Akhtar" to the current target field
})

Given(/^i click on email address$/, () => World.clickEmailAddress()); //function clicks on email address field

Then(/^i should eneter my email address$/, async () => {
  return World.driver.type("mohinakhtar@hotmail.com"); //type method is used to enter the value "mohinakhtar@hotmail.com" to the current target field
})

Given(/^i click on password$/, () => World.clickPassword()); //function clicks on password field

Then(/^then i should enter a password$/, async () => {
  return World.driver.type("mohin123"); type function is used to eneter the value "mohin123" in to the current target field
})

Given(/^i click on re enter password$/, () => World.clickReEnterPassword()); //function clicks on re enter password field

Then(/^i should enter password$/, async () => {
  return World.driver.type("mohin123"); //type method is used to re eneter the same password in the current target fied
})

Given(/^i click on terms and conditions$/, () => World.clickTandC()); //function clciks on t&c field

Then(/^i should click on agree$/, async () => {
  return World.driver.findElement(By.id("agreeTermsAndConds")); 
})


// signing in


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Given(/^i click on sign on signin $/, () => world.clickSignIn());

Then(/^then i should be on the signin page$/, async () => {
  return World.driver.findElement(By.id('main'));
})

Given(/^i click on username $/, () => world.clickUsername());

Then(/^then i should enter my username$/, async () => {
  // tryinng to find a way to pass username in this step
  // without having to apply it to world.clickUsername().
})

Given(/^i click on password $/, () => world.clickPassword());

Then(/^then i should enter my password$/, async () => {
  // tryinng to find a way to pass the password in this step
  // without having to apply it to world.clickPassword() function.
})

Given(/^i click on signin $/, () => world.clickSignIn());

Then(/^then i should click on signout $/, async () => {
   return World.driver.findElement(By.linkText('Sign Out'));
//this should indicate that you managed to sign in to your account 
//successfully.
})





