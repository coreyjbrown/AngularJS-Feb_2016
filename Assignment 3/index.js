angular.module('MyApp', ['MyServices'])

.controller('MainController', function(Student, Calc) {
	var self = this;

	self.newStudent = new Student();

	self.addNewAssignment = function(){
		self.newStudent.addAssignment(self.newAssignment);
		self.newAssignment = {};
		self.average = Calc.getAverage(self.newStudent.assignments) || 0;
		self.grade = Calc.getGrade(self);
	};

});