Feature: Homepage

  Scenario: Github homepage should allow user to sign in
    Given a user who visits the github homepage
    When the user signs in
    Then the user should be logged in