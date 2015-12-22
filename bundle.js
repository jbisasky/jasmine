(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	'use strict';
	
	angular.module('app', [])
	.controller('AppCtrl', require('./appCtrl'));
	
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
},{"./appCtrl":2}],2:[function(require,module,exports){
(function() {
	'use strict';
	
	module.exports = AppCtrl;
	AppCtrl.$inject = ['$scope$'];
	
	function AppCtrl($scope) {
		$scope.hello = 'World';
	}
	
})();
},{}]},{},[1]);
