module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // You can add configuration options for Jasmine here
        // The possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // For example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // Leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // Removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcov' } // Generate lcov report
      ]
    },
    files: [
      { pattern: 'src/**/*.ts', included: false, served: true, watched: true },
      { pattern: 'src/**/*.spec.ts', included: false, served: true, watched: true }
    ],
    preprocessors: {
      'src/**/*.ts': ['coverage']
    },
    reporters: ['progress', 'kjhtml', 'coverage'], 
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false, // Set to false to prevent re-running on file change
    browsers: ['ChromeHeadless'],
    singleRun: true, // Set to true to run tests once and exit
    restartOnFileChange: false, // Ensure it does not restart on file change
    browserNoActivityTimeout: 60000 // Increase timeout to prevent disconnection
  });
};
