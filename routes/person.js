var router = require('express').Router();

app.post('/addPeople', function(request, response){

  var client = new pg.Client(config);
  var peopleFirstName = [];
  var peopleLastName = [];

  console.log(request.body);
  peopleFirstName = request.body.firstName;
  peopleLastName = request.body.lastName;

  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('INSERT INTO people (first_name, last_name) VALUES ($1, $2)',
      [peopleFirstName], [peopleLastName], function(err){
      if(err){
        console.log('Query error', err);
        response.sendStatus(500);
      } else {
        console.log('Great success');
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
