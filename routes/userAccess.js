module.exports = function(app){

	var userAccessCtrl = app.controllers.userAccess;

	app.post('/authenticate', userAccessCtrl.authenticate);
	
	app.get('/authenticate/:token', userAccessCtrl.find);

};
