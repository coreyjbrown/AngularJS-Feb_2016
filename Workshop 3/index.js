angular.module('MyApp', ['MyServices'])

.controller('MainController', function(User, Songs) {
	var self = this;
	self.newUser = {};
	self.Songs = Songs;
	self.getNewUser = function(){
		self.myUser = new User(self.newUser);
	};
});