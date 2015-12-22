(function() {
	'use strict';
	module.exports = AppCtrl;
	
	AppCtrl.$inject = ['$scope', 'AppFactory'];
	
	function AppCtrl($scope, AppFactory) {
		var vm = this;
		vm.hello = 'world';
		$scope.test = 'hello';
		vm.date = moment('2015-12-16', 'YYYY-MM-DD').format('dddd');
		
		vm.
		
		vm.function1 = function1;
		vm.function2 = function2;
		
		vm.squareTest = AppFactory.square(2);
		
		function function1(a) {
			return vm.function2(a);
		}
		
		function function2(a) {
			return a + 2;
		}
	}
})();