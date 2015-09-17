module.exports = function(app) {

	var Establishment = app.models.establishment;

	var EstablishmentsController = {
		index: function(req, res){
			Establishment.create({name:'Leonardo', address:'Anyplace', email:'leosilvade@gmail.com', phones:['(12)121212121', '(13)3123231213'], coord:{lng:1, lat:1}}, function(err, establishment){
				if(err) res.status(500).json({message:err});
				else res.status(201).json(establishment);
			});
		}
	};
	
	return EstablishmentsController;

};
