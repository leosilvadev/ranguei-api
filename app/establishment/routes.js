'use strict';

module.exports = function() {

	var establishments = require('./controller');

	app.get('/establishments', establishments.index);

};
