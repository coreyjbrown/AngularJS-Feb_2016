angular.module('MyApp', [])

.controller('MainController', function () {
	var self = this;

	self.td = {};

	self.addToDo = function(){
		console.log("Hello World");
	};
});