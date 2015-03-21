module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		files: [
			'libs/jquery/dist/jquery.js',
			'libs/angular/angular.js',
			'libs/angular-mocks/angular-mocks.js',
			'libs/lodash/dist/lodash.js',
			'libs/underscore.string/lib/underscore.string.js',
			'app/**/*.js',
			'tests/**/*.js',
			'app/templates/*.html'
		],

		reporters: ['progress'],
		colors: true,
		autoWatch: false,
		browsers: ['PhantomJS'],
		singleRun: true,
		plugins: [
			'karma-phantomjs-launcher',
			'karma-jasmine'
		]
	});
};
