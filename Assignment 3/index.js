angular.module('MyApp', ['MyServices'])

.controller('MainController', function(Student) {
	var self = this;

	self.myStudent = new Student(this.newAssignment);

});