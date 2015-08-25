Feature: Repository

  Scenario: User creates a new repository
    Given a user clicks create new repository
    Then the user should be redirected to the create new repository page
    And public should be selected by default
    And should be able to create a new repository
    Then the user should be redirected to the repository page
    