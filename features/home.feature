Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

  Scenario: Search fields renders
    Given I go to the nav bar
    Then I should see the Search fields

  Scenario: Sector lists renders
    Given I go to the search fields
    Then I should see the Sector lists

  Scenario: Jobs blog renders
    Given I go to the search fields
    Then I should see the Jobs blog

  Scenario: Featired jobs renders
    Given I go to the jobs blogs
    Then I should see the Featured jobs

  Scenario: Footer renders
    Given I go to the featured jobs
    Then I should see the Footer
