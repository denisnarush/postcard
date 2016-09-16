'use strict';

var mongoose = require('mongoose');

const WAITING_FOR_PRINT = 'WAITING_FOR_PRINT';
const PRINTED_WAITING_FOR_SEND = 'PRINTED_WAITING_FOR_SEND';
const SENT = 'SENT';

var statusKeys = [
    WAITING_FOR_PRINT,
    PRINTED_WAITING_FOR_SEND,
    SENT
];

var cardSchema = mongoose.Schema({
    message:  String,
    senderAddress: { type:String, required: true },
    receiverAddress: { type:String, required: true },
    createdOn: { type: Date, default: Date.now },
    statusKey: {
        type: String,
        enum: statusKeys,
        default: WAITING_FOR_PRINT,
        required: true
    }
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
