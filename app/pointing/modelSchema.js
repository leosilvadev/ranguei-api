'use strict';

var db = require('../configs/mongo')(),
	 Schema = require('mongoose').Schema;

var PointingSchema = Schema({
	point: {type:Number, min:1, max:10},
	goodPoints: String,
	badPoints: String
});

exports.pointing = PointingSchema;
