module.exports = function () {
	this.Given(/^Ich öffne "([^"]*)"$/, function (website, callback) {
		// Write code here that turns the phrase above into concrete actions
		this.browser.visit(website, callback);
	});

	this.Given(/^Ich im Suchfeld "([^"]*)" eingebe$/, function (searchTerm, callback) {
		// Write code here that turns the phrase above into concrete actions
		this.browser.fill('#searchInput', searchTerm);
		this.browser.pressButton('#searchButton', callback);
	});

	this.Given(/^Wird die Seite neugeladen$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		this.browser.assert.success();
		callback();
	});

	this.Given(/^Ich sehe den Text "([^"]*)"$/, function (textToLookFor, callback) {
		// Write code here that turns the phrase above into concrete actions
		this.browser.assert.text('.searchdidyoumean', 'Ähnlicher Begriff: deutsche brauer');
		callback();
	});

	this.Given(/^Ich sehe (\d+) Suchergebnisse auf der Seite$/, function (count, callback) {
		// Write code here that turns the phrase above into concrete actions
		this.browser.assert.elements('.mw-search-result-heading', count);
		callback();
	});

	this.Given(/^Ich sehe den Text "([^"]*)" an Position "([^"]*)"$/, function (text, position, callback) {
		// Write code here that turns the phrase above into concrete actions
		this.browser.assert.text('.mw-search-result-heading a[data-serp-pos="' + position + '"]', text);
		callback();
	});
};