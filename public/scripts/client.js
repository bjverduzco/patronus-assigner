var app = angular.module('patronusAssignerApp', []);

app.controller('PatronusAssignerController', function($http) {
  var vm = this;

  vm.person = [];
  vm.patronus = [];

  var configPerson = {
    method: 'GET',
    url: '/getPerson'
  }

  var configPatronus = {
    method: 'GET',
    url: '/getPatronus'
  }

  function handlePersonSuccess(response) {
    vm.person = response.data;
    console.log('Success regarding personList', response);
  }

  function handlePatronusSuccess(response) {
    vm.patronus = response.data;
    console.log('Success regarding patronusList', response);
  }

  function handleFailure(response) {
    console.log('Failure!', response);
  }

  function getInfo() {
    $http(configPerson).then(configPatronus).then(handlePersonSuccess, handlePatronusSuccess, handleFailure);
  }

  vm.addPerson = function() {
    var data = response.data;
    $http.post('/addPerson', data).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log(response);
    })
  };

  vm.addPatronus = function() {
    var data = response.data;
    $http.post('/addPatronus', data).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log(response);
    })
  };
});
