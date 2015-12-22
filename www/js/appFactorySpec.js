'use strict';

var appFactoryModule = require('./appFactory.js');

describe('appFactory tests', function() {
	var appFactory;
	
	beforeEach(inject(function() {
		appFactory = new appFactoryModule();
	}));
	
	describe('square method', function() {
		it('should square the integer', function() {
			expect(appFactory.square(2)).toEqual(4);
		});
	});
	
});