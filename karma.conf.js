module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'./bower_components/angular/angular.js',
			'./bower_components/angular-mocks/angular-mocks.js',
			'./bower_components/lodash/lodash.js',
			'src/module.js',						
			'src/**/*.js',
			'src/**/*.html'
		],

		// list of files to exclude
		exclude: [
		],

		ngHtml2JsPreprocessor: {
			stripPrefix: 'Atom.Web'
		},

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'Atom.Web/modules/app/**/!(*spec).js': ['coverage'],
			// do not include tests or libraries
			'Atom.Web/app/**/!(*spec).js': ['coverage'],
			// generate js files from html templates
			'Atom.Web/**/*.html': 'ng-html2js'
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		//plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-teamcity-reporter', 'karma-chrome-launcher', 'karma-ng-html2js-preprocessor'],
		plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-ng-html2js-preprocessor'],

		// After I added proxy settings to this file I was getting DISCONNECTED
		// messages from karma/phantomjs.  This fixes the problem.
		browserNoActivityTimeout: 100000,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS']
		//browsers: ['Chrome']

		//These karma settings are set in the karma.js (grunt-karma):
		//autoWatch, singleRun, reporters, coverageReporter
	});
};