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