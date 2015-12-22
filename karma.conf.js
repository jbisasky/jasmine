// Karma configuration
// Generated on Fri Dec 04 2015 16:44:50 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'commonjs'],


    // list of files / patterns to load in the browser
    files: [
        'www/bower_components/moment/moment.js',
        'www/bower_components/angular/angular.js',
        'www/bower_components/angular-mocks/angular-mocks.js',
        'www/js/appCtrl.js',
        'www/js/appCtrlSpec.js',
        'www/js/appFactory.js',
        'www/js/appFactorySpec.js',
        'www/js/helloWorld.js',
        'www/js/helloWorldSpec.js'
    ],


    // list of files to exclude
    exclude: [
        'www/js/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'www/js/*.js': ['commonjs']
    },
    
    browserify: {
        debug: true  
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
