var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'patronus_assigner',
  port: 5432
};

router.post('/add', function(request, response){


  var peopleFirstName = [];
  var peopleLastName = [];

  console.log(request.body);
  peopleFirstName = request.body.firstName;
  peopleLastName = request.body.lastName;

  client.connect(function(err){
    var client = new pg.Client(config);
    if(err){
      console.log('Connection error, go fix your wand.', err);
    }
    client.query('INSERT INTO people (first_name, last_name) VALUES ($1, $2)',
      [peopleFirstName], [peopleLastName], function(err){
      if(err){
        console.log('Query error, go back to beginner charms class Harry!!', err);
        response.sendStatus(500);
      } else {
        console.log('Y\'r a wizard Harry!!!');
        response.sendStatus(200);
      }

      client.end(function(err){
        if(err){
          console.log('Disconnect error', err);
        }
      })

    })
  })

})

router.get('/get', function(request, response){
  var client = new pg.Client(config);
  var peopleList = {};

  client.connect(function(err){
    if(err){
      console.log('Connection error, please fix your wand.', err);
    }
    client.query('SELECT first_name, last_name FROM people', function(err, result){
      console.log(result.rows);
      peopleList = result.rows;
      if(err){
        console.log('Query error, go back to beginner charms class Harry!!', err);
        response.sendStatus(500);
      } else {
        console.log('Y\'r a wizard Harry!!!', peopleList);
        console.log('Y\'r a wizard Harry!!! ', response);
        response.sendStatus(200);
      }

      client.end(function(err){
        if(err){
          console.log('Disconnect error', err);
        }
      })

    })
  })

})

module.exports = router;
