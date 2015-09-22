'use strict';

var express = require('express')
	, cors = require('cors')
	, bodyParser = require('body-parser')
	, app = express()
	, Promise = require('bluebird');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/establishments', require('./establishment/routes'));
app.use('/establishments', require('./pointing/routes'));
app.use('/access', require('./user_access/routes'));

app.disable('x-powered-by');

app.listen(9000, function(){
	console.log('Ranguei online');
});

module.exports = app;
