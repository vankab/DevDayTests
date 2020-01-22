Feature: Login 

   This is to login to Gmail

Scenario: Login Validation
Given I am in the demo site
When I enter valid credentials
Then I should be able to login successfully