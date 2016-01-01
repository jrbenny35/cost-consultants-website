'use strict';
var express = require('express');
var router = express.Router();

router.use('/contact', require('./contactApi.js'));
router.use('/blog', require('./blogApi.js'));

module.exports = router;