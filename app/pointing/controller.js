'use strict';

module.exports = function() {

	const ObjectId = require('mongoose').Types.ObjectId;
	const Establishment = require('../establishment/model').establishment;

	var PointingController = {
	
		point: function(req, res){
			const id = req.param('establishmentId');
			Establishment.findOneAsync({_id: new ObjectId(id)})
				.then(function(establishment){
					const pointing = req.body;
					establishment.pointings.push(pointing);
					establishment.saveAsync()
						.then(function(){
							res.status(200).json({message: 'Your vote was registered, thank you!'});
						})
						.catch(function(err){
							res.status(500).json({message: err});
						});				
				})
				.catch(function(err){
					res.status(500).json({message: err});

				});
		}

	};

	return PointingController;

};