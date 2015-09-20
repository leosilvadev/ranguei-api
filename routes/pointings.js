module.exports = function(app) {

	var pointings = app.controllers.pointings;

	app.post('/establishments/:establishmentId/pointings', pointings.point);

};
