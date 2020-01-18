module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'jsdom',
	reporters: [
		'default',
		['jest-junit', {
			suiteName: 'Jest Unit Tests',
			outputName: 'unit-test-report.xml',
			classNameTemplate: '{classname}',
			titleTemplate: '{title}',
			suiteNameTemplate: '{filename}',
			includeConsoleOutput: 'true'
		}]
	]
};