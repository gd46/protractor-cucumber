var account = require('../../config/credentials.js');

var repo = function homePage(){
  
  var profileDropdown = element(by.xpath("//*[@id='user-links']/li[3]/a"));
  var profileLink = element(by.xpath("//*[@id='user-links']/li[3]/div/div/a[1]"));
  var createNewIcon = element(by.xpath("//*[@id='user-links']/li[2]/a"));
  var newRepositoryLink = element(by.xpath("//*[@id='user-links']/li[2]/div/ul/a[1]"));
  var repositoryNameField = element(by.id("repository_name"));
  var publicRepo = element(by.id("repository_public_true"));
  var submitButton = element(by.xpath("//button[@type='submit']"));

  repo.gotoProfile = function() {
    profileDropdown.click();
    browser.sleep(2000);
    profileLink.click();
    browser.sleep(2000);
  }
  
  repo.gotoCreateNewRepoPage = function() {
    createNewIcon.click();
    browser.sleep(2000);
    newRepositoryLink.click();
    browser.sleep(2000);
  }
  
  repo.checkifPublicSetDefault = function(cb) {
    publicRepo.isSelected().then(function(isSelected){
      return cb(isSelected);
    });
    browser.sleep(2000);
  }
  repo.createNewRepo = function() {
    repositoryNameField.sendKeys("test-cucumber-repo");
    browser.sleep(2000);
    submitButton.click();
    browser.sleep(2000);
  }
}
module.exports = repo;