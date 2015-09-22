'use strict';

var router = require('express').Router(),
	controller = require('./controller');

router.post('/', controller.authenticate);
router.get('/:token', controller.find);

module.exports = router;
