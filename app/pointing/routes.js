'use strict';

module.exports = function() {

	var pointings = require('./controller');

	app.post('/establishments/:establishmentId/pointings', pointings.point);

};
