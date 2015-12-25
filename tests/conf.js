// conf.js
exports.config = {
    framework: 'jasmine2',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'firefox'
    },
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    }
};