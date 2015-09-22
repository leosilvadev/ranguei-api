'use strict';

module.exports = function() {

	const Establishment = require('./model').establishment;

	var EstablishmentsController = {
		index: function(req, res){
			const pointings = [{point:1, goodPoints:'Fast delivery!', badPoints:'Too expensive!'}];
			Establishment.create({name:'Leonardo', address:'Anyplace', email:'leosilvade@gmail.com', phones:['(12)121212121', '(13)3123231213'], coord:{lng:1, lat:1}, pointings: pointings}, function(err, establishment){
				if(err) res.status(500).json({message:err});
				else res.status(201).json(establishment);
			});
		}
	};
	
	return EstablishmentsController;

};
