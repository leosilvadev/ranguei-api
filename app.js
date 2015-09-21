var express = require('express')
	, cors = require('cors')
	, load = require('express-load')
	, bodyParser = require('body-parser')
	, app = express()
	, mongoose = require('mongoose')
	, Promise = require('bluebird')
	, redis = require('redis')
	, redisClient = redis.createClient();

Promise.promisifyAll(mongoose);
Promise.promisifyAll(redisClient);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.redisClient = redisClient;
app.mongoose = mongoose;

load('models')
	.then('middlewares')
	.then('controllers')
	.then('routes')
	.into(app);

app.disable('x-powered-by');

app.listen(9000, function(){
	console.log('Ranguei online');
});

module.exports = app;
