angular.module('MyApp', [])

.controller('MainController', function () {
	var self = this;

	self.td = {};
	self.list = [];

	self.addToDo = function(){
		self.list.push(self.td);
		self.td = {};
	};
});