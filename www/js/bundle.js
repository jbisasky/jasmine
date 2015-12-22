(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	'use strict';
	angular.module('app', [])
	.controller('AppCtrl', require('./appCtrl'))
	.factory('AppFactory', require('./appFactory'));
})();
},{"./appCtrl":2,"./appFactory":3}],2:[function(require,module,exports){
(function() {
	'use strict';
	module.exports = AppCtrl;
	
	AppCtrl.$inject = ['$scope', 'AppFactory'];
	
	function AppCtrl($scope, AppFactory) {
		var vm = this;
		vm.hello = 'world';
		$scope.test = 'hello';
		vm.date = moment('2015-12-16', 'YYYY-MM-DD').format('dddd');
		
		vm.function1 = function1;
		vm.function2 = function2;
		
		//vm.squareTest = AppFactory.square(2);
		
		function function1() {
			return vm.function2(2);
		}
		
		function function2(a) {
			return a + 2;
		}
	}
})();
},{}],3:[function(require,module,exports){
(function() {
	'use strict'
	
	module.exports = appFactory;
	
	function appFactory() {
		var svc = {
			square: square,
		};
		
		return svc;
		
		function square(x) {
			return x * x;
		}
	}
	
})();
},{}]},{},[1]);
