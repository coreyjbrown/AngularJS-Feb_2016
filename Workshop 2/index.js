angular.module('MyApp', ['MyServices'])

.controller('MainController', function(User, Songs) {
	var self = this;
	self.Songs = Songs;
	self.myUser = new User(self.newUser);
});