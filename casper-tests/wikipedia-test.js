casper.options.viewportSize = {
	width: 1280,
	height: 800
}

casper.test.begin('Wikipedia test suite', function(test) {

	casper.start('http://localhost:8080', function () {
		this.fill('#searchform', {search: 'deutsche brauerei'}, true);
		this.waitForSelector('.searchdidyoumean');
	});

	casper.then(function () {
		test.assertTextExist('Ähnlicher Begriff: deutsche brauer');
	});

	casper.then(function () {
		this.clickLabel('Hausbrauerei Feierling');
	});

	casper.then(function () {
		test.assertTitle('Hausbrauerei Feierling – Wikipedia');
	});

	casper.run(function () {
		test.done();
	});
});