(function() {
	'use strict';
	angular.module('app', [])
	.controller('AppCtrl', require('./appCtrl'))
	.factory('AppFactory', require('./appFactory'));
})();