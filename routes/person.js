var router = require('express').Router();

router.post('/addPerson', function(request, response){

  var client = new pg.Client(config);
  var peopleFirstName = [];
  var peopleLastName = [];

  console.log(request.body);
  peopleFirstName = request.body.firstName;
  peopleLastName = request.body.lastName;

  client.connect(function(err){
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

router.get('/getPeople', function(request, response){
  var client = new pg.Client(config);
  var people = {};

  client.connect(function(err){
    if(err){
      console.log('Connection error, please fix your wand.', err);
    }
    client.query('SELECT first_name, last_name FROM people', function(err, response){
      if(err){
        console.log('Query error, go back to beginner charms class Harry!!', err);
        response.sendStatus(500);
      } else {
        console.log('Y\'r a wizard Harry!!!', response);
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
