var express = require('express')
	, load = require('express-load')
	, bodyParser = require('body-parser')
	, app = express()
	, mongoose = require('mongoose')
	, Promise = require('bluebird')
	, redis = require('redis')
	, redisClient = redis.createClient();

Promise.promisifyAll(redisClient);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.redisClient = redisClient;

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
