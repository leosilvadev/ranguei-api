'use strict';

var redis = require('redis'),
	 redisClient = redis.createClient(),
	 Promise = require('bluebird');

Promise.promisifyAll(redisClient);

module.exports = function(){
	if(!redisClient) {
		Promise.promisifyAll(redisClient);
		redisClient = redis.createClient();
	}
	return redisClient;
};
