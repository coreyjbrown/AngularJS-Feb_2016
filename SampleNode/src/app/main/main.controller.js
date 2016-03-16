'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;

  // self.todos = getAllTodos();


  function getAllTodos() {
    TodoListResource.query()
    .$promise
    .then(function onSuccesss(response){
      self.todos = response;
    });
  }

  self.addTodo = function(todo) {
    TodoAddResource.addTodo(null, todo)
    .$promise
    .then(function onSuccesss(response){
      angular.extend(todo, response);
      self.todos.push(todo);
    });
    self.userTodo = {};
  };

  self.editTodo = function(todo) {

    };

  self.updateTodo = function(todo) {

  };

  self.cancelUpdate = function() {

  };

  getAllTodos();
});