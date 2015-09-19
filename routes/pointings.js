module.exports = function(app) {

	var pointingCtrl = app.controllers.pointings;

	app.post('/:establishmentId/pointings', pointingCtrl.point);

};
