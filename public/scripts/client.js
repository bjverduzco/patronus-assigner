var app = angular.module('patronusAssignerApp', []);

app.controller('PatronusAssignerController', function($http) {
  var vm = this;

  var personList = [];
  var patronusList = [];

  var configPerson = {
    method: 'GET',
    url: '/person'
  }

  var configPatronus = {
    method: 'GET',
    url: '/patronus'
  }

  function handlePersonSuccess(response) {
    personList.push(response.data);
    console.log('Success regarding personList', response);
  }

  function handlePatronusSuccess(response) {
    patronusList.push(response.data);
    console.log('Success regarding patronusList', response);
  }

  function handleFailure(response) {
    console.log('Failure!', response);
  }

  function getInfo() {

    }
  }

})
