var account = require('../../config/credentials.js');

var homePage = function homePage(){
  
  var loginButton = element(by.xpath("/html/body/div[1]/div[1]/div/div[1]/a[2]"));
  var emailField = element(by.xpath("//input[@name='login']"));
  var passwordField = element(by.xpath("//input[@name='password']"));
  var submitButton = element(by.xpath("//input[@type='submit']"));
  var profileDropdown = element(by.xpath("//*[@id='user-links']/li[3]/a"));
  
  homePage.gotoLogin = function() {
    browser.get(browser.baseUrl);
    browser.sleep(2000);
  }
  
  homePage.signIn = function() {
    loginButton.click();
    browser.sleep(2000);
    emailField.sendKeys(account.credentials.username);
    browser.sleep(2000);
    passwordField.sendKeys(account.credentials.password);
    browser.sleep(2000);
    submitButton.click();
    browser.sleep(2000);
  }
  
  homePage.isLoggedIn = function(cb) {
    profileDropdown.isPresent().then(function(isPresent){
      return cb(isPresent);
    });
    browser.sleep(2000);
  }

}
module.exports = homePage;