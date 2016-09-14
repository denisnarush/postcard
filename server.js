'use strict';

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var db;
var bodyParser = require('body-parser');

// DB Connect
mongoose.connect('mongodb://localhost/postcard');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connection established');
});

app.use(express.static('public', {index: 'index.html'}));
// parse application/json
app.use(bodyParser.json());
app.use('/rest', require('./server/routs/index.js'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
