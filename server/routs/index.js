'use strict';

var express = require('express');
var router = express.Router();

var Card = require('../models/card/card.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    //TODO: add something if needed
    next()
});

// TODO: move into separate module
router.post('/card', function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;
