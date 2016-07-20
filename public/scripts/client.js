var app = angular.module('patronusAssignerApp', []);

app.controller('PatronusAssignerController', function($http) {
  var vm = this;

  vm.person = [];
  vm.patronus = [];

  var configPerson = {
    method: 'GET',
    url: '/person/get'
  }

  var configPatronus = {
    method: 'GET',
    url: '/patronus/get'
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
    $http(configPerson).then(handlePersonSuccess, handleFailure);
    $http(configPatronus).then(handlePatronusSuccess, handleFailure);
  }

  vm.addPerson = function() {
    var data = {patronus: vm.newPerson};
    console.log(data);
    $http.post('/person/add', data).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log(response);
    })
  };

  vm.addPatronus = function() {
    var data = {patronus: vm.newPatronus};
    console.log(data);
    $http.post('/patronus/add', data).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log(response);
    })
  };

  getInfo();
});
