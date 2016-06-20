var SomeClass = function () {};

SomeClass.prototype.getNumberTwo = function () {
	return 2;
};

SomeClass.prototype.getFunction = function (someObject) {
	return function () {
		return someObject;
	};
};

SomeClass.prototype.delayedExecution = function () {
	var me = this;
	global.setTimeout(function () {
		me.time = 42;
	}, 500);
};

module.exports = SomeClass;