'use strict';

var express = require('express');
var router = express.Router();

router.use('/card', require('../routes/card/card.js'));

module.exports = router;
