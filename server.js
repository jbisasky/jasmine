var express = require('express'),
	app 	= express();
	
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/www/index.html');
});

app.use('/js', express.static(__dirname + '/www/js'));
app.use('/bower_components', express.static(__dirname + '/www/bower_components'));

app.listen(8080, function() {
	console.log('I\'m Listening');
});