var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var homePage = require('../support/homepage_support.js');

module.exports = function() {
  
  this.Given(/^a user who visits the github homepage$/, function(callback){
    homePage.gotoLogin();
    callback();
  });
  
  this.When(/^the user signs in$/, function(callback){
    homePage.signIn();
    callback();
  });
  
  this.Then(/^the user should be logged in$/, function(callback){
    homePage.isLoggedIn(function(isPresent){
      assert.isTrue(isPresent, "Did not successfully login");
    });
    callback();
  });
  
}