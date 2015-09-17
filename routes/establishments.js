module.exports = function(app) {

	var establishmentsCtrl = app.controllers.establishments;

	app.get('/', establishmentsCtrl.index);

};
