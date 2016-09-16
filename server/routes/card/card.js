'use strict';

var express = require('express');
var router = express.Router();

var Card = require('../../models/card/card.js');

router.post('/', function (req, res, next) {
    Card.create(req.body).then(function (card) {
        res.json(card);
    }, function (err) {
        next(err);
    });
});

module.exports = router;
