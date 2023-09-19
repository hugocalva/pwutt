module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};