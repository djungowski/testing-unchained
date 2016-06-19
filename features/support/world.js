var zombie = require('zombie');

var World = function() {
	this.browser = new zombie();
	this.browser.silent = true;
};

module.exports = function () {
	this.World = World;
};
