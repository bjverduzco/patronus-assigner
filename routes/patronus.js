var router = require('express').Router();

router.post('/addPatronus', function(request, response){

  var client = new pg.Client(config);
  var patronusName = [];

  console.log(request.body);
  patronusName = request.body.patronus;
  client.connect(function(err){
    if(err){
      console.log('Connection error, no Quidditch for you!', err);
    }
    client.query('INSERT INTO patronus (patronus_name) VALUES ($1)', [patronusName], function(err){
      if(err){
        console.log('Query error, go back to beginner charms class!', err);
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

router.get('/getPatronus', function(request, response){
  var client = new pg.Client(config);

  var patronusList = {};

  client.connect(function(err){
    if(err){
      console.log('Connection error, no Quidditch for you!', err);
    }
    client.query('SELECT patronus_name FROM patronus;', function(err, result){
      console.log(result.rows);
      patronusList = result.rows;
      if(err){
        console.log('Query error, go back to beginner charms class!', err);
        response.sendStatus(500);
      } else {
        console.log('Y\'r a wizard Harry!!!', taskList);
        response.send(patronusList);
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
