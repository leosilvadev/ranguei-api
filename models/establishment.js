module.exports = function(app) {

	var db = require('../configs/mongo_connect')(),
		 Schema = require('mongoose').Schema;

	var Poiting = Schema({
		point: {type:Number, min:1, max:10},
		goodPoints: String,
		badPoints: String
	});

	var Establishment = Schema({
		name: String,
		address: String,
		email: String,
		phones: [String],
		coord: {
			lng: Number,
			lat: Number
		},
		pointings: [Poiting]
	});


	return db.model('establishments', Establishment);

};
