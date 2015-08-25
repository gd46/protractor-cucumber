var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var repo = require('../support/repository_support.js');

module.exports = function() {
  
 this.Given(/^a user clicks create new repository$/, function (callback) {
   repo.gotoCreateNewRepoPage();
   callback();
  });
  
  this.Then(/^the user should be redirected to the create new repository page$/, function (callback) {
    assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl + '/new', "Not on the create new repo page");
    callback();
  });

  this.Then(/^public should be selected by default$/, function(callback){
    repo.checkifPublicSetDefault(function(isSelected){
      assert.isTrue(isSelected, "Public not selected by default");
    });
    callback();
  });
  
  this.Then(/^should be able to create a new repository$/, function (callback) {
    repo.createNewRepo();
    callback();
  });
  
  this.Then(/^the user should be redirected to the repository page$/, function(callback){
    assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl + "test-cucumber-repo", "Not on the repo page");
    callback();
  });
  
}