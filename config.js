const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {
    baseUrl: "https://ui5.sap.com/test-resources/sap/suite/ui/generic/template/demokit/sample.manage.products.sepmra/test/index.html",

    specs: [
        //"./specs/01_SearchTests.spec.js",
        "./specs/02_OrderDetails.spec.js"
    ],
    services: [[QmateService]],
    capabilities: [{
    browserName: "chrome",
    browserVersion: 'stable'
    }],
    framework: "mocha",
    mochaOpts: {
        bail: 0,
        timeout: 60000
    },
    logLevel: 'warn',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/lighthouse-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevels: {
        webdriver: 'warn',
        '@wdio/appium-service': 'warn'
    }
};