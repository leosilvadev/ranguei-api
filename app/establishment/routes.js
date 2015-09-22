'use strict';

var router = require('express').Router(),
	 controller = require('./controller');

router.get('/', controller.index);

module.exports = router;
