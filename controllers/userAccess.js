module.exports = function(app){

	const redisClient = app.redisClient;

	var UserAccessController = {
		
		authenticate: function(req, res){
			const authentication = req.body;
			const authenticationValue = JSON.stringify(authentication);

			redisClient.setAsync(authentication.token, authenticationValue)
				.then(function(){
					res.status(200).json({message:'User authenticated'});
				})
				.catch(function(err){
					res.status(500).json({message:err})
				});
		},

		find: function(req, res){
			const token = req.param('token');

			redisClient.getAsync(token)
				.then(function(authentication){
					if(authentication) res.status(200).json(JSON.parse(authentication));
					else res.status(400).json({message:'Invalid token'});
				})
				.catch(function(err){
					res.status(500).json({message:err})
				});
		}

	};

	return UserAccessController;

};
