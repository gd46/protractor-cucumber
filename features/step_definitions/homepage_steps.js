var homePage = require('../support/homepage_support.js');

var homePageSteps = {};

homePageSteps.initialize = function() {
  
  this.Given(/^a user who visits the github homepage$/, function(callback){
    callback.pending();
  });
  
  this.When(/^the page loads$/, function(callback){
    callback.pending();
  });
  
  this.Then(/^the user should see the sign in button$/, function(callback){
    callback.pending();
  })
  
}