var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var index = require('./routes/index');
var person = require('./routes/person');
var patronus = require('./routes/patronus');

var config = {
  database: 'patronus_assigner',
  port: 5432
};

var app = express();

// Static files
app.use(express.static('public'));

app.use(bodyParser.json());

// Routers
app.use('/', index);
app.use('/person', person);
app.use('/patronus', patronus);


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
