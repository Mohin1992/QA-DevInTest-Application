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
    When: i click on user name
    And: i enter my username
    When: i click on password
    And: i enter my password
    Then: i click on sign in

// logout features
  
  scenario: sign out
    Given: i'm signed in to an account
    When: i click on sign out
    Then: i should be able click on sign in //to indicate that i've successfully signed out

// navigation bar features
   
   scenario: navigation bar renders
    Given: i'm on the jobs page
    When: i click on 
    Then: i should be directed to the 
    When: i click on 
    Then: i should be directed to the
    When: i click on 
    Then: i should be directed to the 
    When: i click on
    Then: i should be directed to the 
    When: i click on 
    Then: i should be directed to the

