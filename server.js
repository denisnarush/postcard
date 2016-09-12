var express = require('express');
var app = express();

app.use(express.static('public', {index: 'index.html'}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
