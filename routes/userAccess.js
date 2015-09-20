module.exports = function(app){

	var userAcess = app.controllers.userAccess;

	app.post('/access/authenticate', userAcess.authenticate);
	
	app.get('/access/:token', userAcess.find);

};
