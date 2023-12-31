module.exports = (on, config) => {
	return Object.assign({}, config, {
		fixturesFolder: "tests/e2e/fixtures",
		integrationFolder: "tests/e2e/specs",
		supportFile: "tests/e2e/support/index.js",
	});
};