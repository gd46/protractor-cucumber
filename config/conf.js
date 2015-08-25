exports.config = {
  framework: 'cucumber',
  cucumberOpts: {
    format: 'pretty',
    timeout: 30000
  },
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    homepage: '../features/homepage.feature',
    repository: '../features/repository.feature'
  },
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://github.com/',
  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
  },
  allScriptsTimeout: 30000
}