angular.module('MyApp', [])

.controller('MainController', function(){
	var self = this;

	var editStatus = false;

	self.person = {
		name: {
			first: 'Corey',
			last: 'Brown'
		},
		email: 'coreyjbrown@gmail.com'
	};

	self.editInfo = function(){
		self.editStatus = true;
		self.newPerson = angular.copy(self.person);
	};

	self.cancelEdit = function(){
		self.editStatus = false;
	};

	self.saveEdit = function(){
		self.person = self.newPerson;
		self.editStatus = false;
	};
});