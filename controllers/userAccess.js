module.exports = function(app){

	const redisClient = app.redisClient;

	var UserAccessController = {
		
		authenticate: function(req, res){
			const authentication = req.body;

			redisClient.set(authentication.token, JSON.stringify(authentication));
			res.status(200).json({message:'User authenticated'});
		},

		find: function(req, res){
			const token = req.param('token');
			if(!token) {
				res.status(400).json({message:'Invalid token'});

			} else {
				redisClient.get(token, function(err, authentication){
					if(authentication) res.status(200).json(JSON.parse(authentication));
					else res.status(400).json({message:'Invalid token'});

				});
			}
		}

	};

	return UserAccessController;

};
