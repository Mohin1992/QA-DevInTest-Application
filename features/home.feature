 Feature: jobs page

//creating a new account features

  Scenario: create account directs me to the correct page
    Given: i click on create account 
    Then: I should see the create accounts page

  Scenario: enter title
    Given: i click on title
    Then: I should enter my type

  Scenario: enter first name
    Given: i click on first name
    Then: i should enter first name

  Scenario: enter surname
    Given: i click on surname
    Then: I should enter my surname

  Scenario: enter password
    Given: i click on password
    Then: i should enter a password

Scenario: re enter password       
    Given: i click on re enter password
    Then: i should enter a password

  Scenario: agree to terms and consitions
    Given: i click on terms and conditions
    Then: i should check the box to agree 

  
//signing in features

  scenario: sign in
    Given: i click on sign in
    Then: i should be on the sign in page 
    
  scenario: enter user name
    Given: i click on user name
    Then: i should enter my username
    
  scenario: enter password
    Given: i click on password
    Then: i should enter my password
  
  scenario: check if signed in
    Given: i click on sign in
    Then: i should click on sign out
