var router = require('express').Router();

app.post('/addPatronus', function(request, response){

  var client = new pg.Client(config);
  var patronusName = [];

  console.log(request.body);
  patronusName = request.body.patronus;
  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('INSERT INTO patronus (patronus_name) VALUES ($1)', [patronusName], function(err){
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
