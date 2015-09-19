module.exports = function(app) {

	var ObjectId = require('mongoose').Types.ObjectId;
	var Establishment = app.models.establishment;

	var PointingController = {
	
		point: function(req, res){
			var id = req.param('establishmentId');
			Establishment.findOne({_id: new ObjectId(id)}, function(err, establishment){
				if(err) res.status(400).json({message:'Invalid establishment'});
			
				var pointing = req.body;
				establishment.pointings.push(pointing);
				console.log(establishment.pointings);
				establishment.save();
				res.status(200).json({message: 'Your vote was registered, thank you!'});
			});
		}

	};

	return PointingController;

};
