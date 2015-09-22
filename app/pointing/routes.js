'use strict';

var router = require('express').Router(),
	 controller = require('./controller');

router.post('/:establishmentId/pointings', controller.point);

module.exports = router;
