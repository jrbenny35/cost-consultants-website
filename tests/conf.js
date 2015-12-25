// conf.js
exports.config = {
    framework: 'jasmine2',
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    }
};