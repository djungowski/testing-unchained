var SomeClass = require('../lib/some-class.js');

describe('SomeClass Test Suite', function() {
	beforeEach(function() {
		this.instance = new SomeClass();
	});

	describe('#getNumberTwo()', function() {
		describe('positive test', function() {
			it('returns exactly 2', function() {
				expect(this.instance.getNumberTwo()).toEqual(2);
			});
		});

		describe('negative tests', function() {
			it('does not return 5', function() {
				expect(this.instance.getNumberTwo()).not.toEqual(5);
			});
		});
	});

	describe('Currying', function() {
		it('returns a function', function() {
			expect(this.instance.getFunction()).toEqual(jasmine.any(Function));
		});

		it('returns the passed value', function() {
		    var someObject = {some: 'value'};
			var actual = this.instance.getFunction(someObject);
			expect(actual()).toBe(someObject);
		});
	});

	describe('delayedExecution', function() {
	    it('changes a value after 500ms', function() {
	        expect(this.instance.time).toBeUndefined();
			jasmine.clock().install();
			this.instance.delayedExecution();
			jasmine.clock().tick(500);
			expect(this.instance.time).toEqual(jasmine.any(Number));
			jasmine.clock().uninstall();
	    });

		it('calls setTimeout', function() {
			spyOn(global, 'setTimeout').and.returnValue();
			this.instance.delayedExecution();
			expect(global.setTimeout).toHaveBeenCalledTimes(1);

			jasmine.getFixtures().set('<div>')
		});
	});
});