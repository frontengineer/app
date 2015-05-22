'use strict';

var express = require('express');
var controller = require('./start_domain.controller.js');

var router = express.Router();

//router.get('/', controller.index);
router.post('/', controller.index);

module.exports = router;
