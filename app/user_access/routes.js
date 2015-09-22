'use strict';

module.exports = function(){

	var userAcess = require('./controller');

	app.post('/access', userAcess.authenticate);
	
	app.get('/access/:token', userAcess.find);

};
