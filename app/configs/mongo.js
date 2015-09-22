'use strict';

var mongoose = require('mongoose'),
	 config = require('../../config.json'),
	 env = process.env.NODE_ENV || "development",
	 url = config.MONGODB[env],
	 Promise = require('bluebird'),
	 connection;

Promise.promisifyAll(mongoose);

module.exports = function(){
	if(!connection) {
		connection = mongoose.connect(url);
	}
	return connection;
};
