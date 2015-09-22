'use strict';

var redis = require('redis'),
	 redisClient = redis.createClient(),
	 Promise = require('bluebird');

module.exports = function(){
	if(!redisClient) {
		Promise.promisifyAll(redisClient);
		redisClient = redis.createClient();
	}
	return redisClient;
};
