'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;
  self.isEditing = false;
  var tempTodo;


  function getAllTodos() {
    TodoListResource.query()
    .$promise
    .then(function onSuccesss(response){
      self.todos = response;
      console.table(self.todos);
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
    TodoDetailsResource.get({id: todo._id})
    .$promise
    .then(function onSuccesss(response){
      self.isEditing = true;
      self.userTodo = response;
    });
  };

  self.updateTodo = function(todo) {
    TodoUpdateResource.save(null, todo)
    .$promise
    .then(function onSuccesss(response){
      // angular.extend(tempTodo, response, todo);
      self.isEditing = false;
      self.userTodo = {};
      getAllTodos();
    })
  };

  self.cancelUpdate = function() {
    self.isEditing = false;
    self.userTodo = {};
  };

  getAllTodos();
});