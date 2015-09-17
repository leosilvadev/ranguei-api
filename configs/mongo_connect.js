var mongoose = require('mongoose'),
	 config = require('../config.json'),
	 env = process.env.NODE_ENV || "development",
	 url = config.MONGODB[env],
	 connection;

module.exports = function(){
	if(!connection) {
		connection = mongoose.connect(url);
	}
	return connection;
};
