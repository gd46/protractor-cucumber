Feature: Homepage

  Scenario: Github homepage should have a sign in button
    Given a user who visits the github homepage
    When the page loads
    Then the user should see a sign in button