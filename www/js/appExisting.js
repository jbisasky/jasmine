(function() {
	'use strict';
	angular.module('app', [])
	
	//.controller('AppCtrl', require('./appCtrl'));
	.controller('AppCtrl', function($scope) {
		$scope.hello = 'world';
	});
})();


// (function() {
// 	'use strict';
	
// 	angular.module('app', [])
// 		.controller('appCtrl', appCtrl)
// 		.factory('appFactory', appFactory);
		
// 		function appCtrl(appFactory) {
// 			var vmc = this;
// 			this.test = 'hello';
// 			vmc.hello = 'world!';
			
// 			vmc.toString = function(x) {
// 				return x + ' doubled equals ' + appFactory.double(x);
// 			}
			
// 			vmc.double = function(input) {
// 				return input * 2;
// 			}
			
// 			vmc.doubleFactory = function(input) {
// 				return appFactory.double(input);
// 			}
// 		}
		
// 		function appFactory() {
// 			var double = function(input) {
// 				return input * 2;
// 			}
			
// 			var square = function(input) {
// 				return input * input;
// 			}
			
// 			return {
// 				double: double,
// 				square: square
// 			}
// 		}
// })();