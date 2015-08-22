exports.config = {
  framework: 'cucumber',
  seleniumAddress: 'http://127.0.0.1:4444/hub',
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    homepage: 
  },
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: ''
}