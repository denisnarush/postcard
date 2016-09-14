'use strict';

var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
    createdOn: { type: Date, default: Date.now }
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
