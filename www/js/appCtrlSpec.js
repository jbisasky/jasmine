'use strict'

var AppCtrlModule = require('./appCtrl.js');
var AppFactoryModule = require('./appFactory.js');

describe('My first jasmine test', function() {
	var AppCtrl, AppFactory, $scope;
	
	beforeEach(inject(function($rootScope) {
		$scope = $rootScope.$new();
		AppFactory = new AppFactoryModule();
		AppCtrl = new AppCtrlModule($scope, AppFactory);	
	}));
	
	it('should return true', function() {
		expect(true).toBe(true);
	});
	
	it('should have a hello scope var', function() {
		expect($scope.test).toBe('hello');
		expect(AppCtrl.hello).toBe('world');
	});
	
	it('should equal Monday', function() {
	 	expect(AppCtrl.date).toBe('Wednesday');
	});
	
	it('should call function2', function() {
		spyOn(AppCtrl, 'function2');
		var output = AppCtrl.function1(2);
		expect(AppCtrl.function2).toHaveBeenCalled();
	});
	
	it('should square the input', function() {
		expect(AppCtrl.squareTest).toBe(4);
	});
});
