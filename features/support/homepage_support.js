var homePage = function homePage(){
  
  homePage.gotoLogin = function() {
    browser.get(browser.basUrl);
    browser.sleep(2000);
  }
  
}
module.exports = homePage;