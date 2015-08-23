var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

//var homePage = require('../support/homepage_support.js');
var account = require('../../config/credentials.js');

module.exports = function() {
  
  this.Given(/^a user who visits the github homepage$/, function(callback){
    //homePage.gotoLogin();
    browser.get(browser.baseUrl);
    browser.sleep(2000);
    callback();
  });
  
  this.When(/^the user signs in$/, function(callback){
    //homePage.signIn();
    element(by.xpath("/html/body/div[1]/div[1]/div/div[1]/a[2]")).click();
    browser.sleep(2000);
    element(by.xpath("//input[@name='login']")).sendKeys(account.credentials.username);
    browser.sleep(2000);
    element(by.xpath("//input[@name='password']")).sendKeys(account.credentials.username);
    browser.sleep(2000);
    element(by.xpath("//input[@type='submit']")).click();
    browser.sleep(2000);
    callback();
  });
  
  this.Then(/^the user should be logged in$/, function(callback){
//    homePage.isLoggedIn(function(isPresent){
//      assert.isTrue(isPresent, "Did not successfully login");
//    })
    element(by.xpath("//*[@id='user-links']/li[3]/a")).isPresent().then(function(isPresent){
      assert.isTrue(isPresent, "Did not successfully login");
    })
    browser.sleep(2000);
    callback();
  });
  
}