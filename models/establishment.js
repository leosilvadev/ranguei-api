module.exports = function(app) {

	var db = require('../configs/mongo_connect')(),
		 Schema = require('mongoose').Schema;

	var establishment = Schema({
		name: String,
		address: String,
		email: String,
		phones: [String],
		coord: {
			lng: Number,
			lat: Number
		}	
	});

	return db.model('establishments', establishment);

};
