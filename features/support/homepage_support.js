//var account = require('../../config/credentials.js');
//
//var homePage = function homePage(){
//  
//  this.loginButton = element(by.xpath("/html/body/div[1]/div[1]/div/div[1]/a[2]"));
//  this.emailField = element(by.xpath("//input[@name='login']"));
//  this.passwordField = element(by.xpath("//input[@name='password']"));
//  this.submitButton = element(by.xpath("//input[@type='submit']"));
//  this.profileDropdown = element(by.xpath("//*[@id='user-links']/li[3]/a"));
//  
//  homePage.gotoLogin = function() {
//    browser.get(browser.basUrl);
//    browser.sleep(2000);
//  }
//  
//  homePage.signIn = function() {
//    this.loginButton.click();
//    browser.sleep(2000);
//    this.emailField.sendKeys(account.credentials.username);
//    browser.sleep(2000);
//    passwordField.sendKeys(account.credentials.password);
//    browser.sleep(2000);
//    this.submitButton.click();
//    browser.sleep(2000);
//  }
//  
//  homePage.isLoggedIn = function(cb) {
//    this.profileDropdown.isPresent().then(function(isPresent){
//      return cb(isPresent);
//    })
//  }
//  
//  
//}
//module.exports = homePage;