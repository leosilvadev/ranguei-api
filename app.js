var express = require('express')
	, load = require('express-load')
	, bodyParser = require('body-parser')
	, app = express()
	, mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

load('models')
	.then('middlewares')
	.then('controllers')
	.then('routes')
	.into(app);

app.disable('x-powered-by');

app.listen(3000, function(){
	console.log('Ranguei online');
});

module.exports = app;
