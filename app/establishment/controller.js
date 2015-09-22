'use strict';


const Establishment = require('./model').establishment;

exports.index = function(req, res){
	const pointings = [{point:1, goodPoints:'Fast delivery!', badPoints:'Too expensive!'}];

	Establishment.find()
	.then(function(establishments){
		res.status(200).json(establishments);
	})
	.catch(function(err){
		res.status(500).json({message: err});
	});

};
