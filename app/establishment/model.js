'use strict';

const db = require('../config/mongo')(),
		Schema = require('mongoose').Schema,
		PointingSchema = require('../pointing/modelSchema').pointing;

var EstablishmentSchema = Schema({
	name: String,
	address: String,
	email: String,
	phones: [String],
	coord: {
		lng: Number,
		lat: Number
	},
	pointings: [PointingSchema]
});


exports.establishment = db.model('establishments', EstablishmentSchema);
