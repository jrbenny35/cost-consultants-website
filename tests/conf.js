// conf.js
exports.config = {
    framework: 'jasmine2',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'firefox'
    },
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    }
};