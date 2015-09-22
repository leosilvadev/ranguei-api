'use strict';

var express = require('express')
	, cors = require('cors')
	, bodyParser = require('body-parser')
	, app = express()
	, Promise = require('bluebird')
	, establishment = require('./establishment');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.disable('x-powered-by');

app.listen(9000, function(){
	console.log('Ranguei online');
});

module.exports = app;
