angular.module('MyApp', [])

.controller('MainController', function () {
	var self = this;

	self.td = {};
	self.list = [];

	self.addToDo = function(){
		self.list.push(self.td);
		self.td = {};
	};

	self.removeToDo = function(td){
		var idx = self.list.indexOf(td);
		self.list.splice(idx, 1);
	};
});