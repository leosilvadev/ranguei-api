module.exports = function(app) {

	var establishments = app.controllers.establishments;

	app.get('/establishments', establishments.index);

};
