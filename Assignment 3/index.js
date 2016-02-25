angular.module('MyApp', ['MyServices'])

.controller('MainController', function(Assignment, Calc) {
	var self = this;

	self.newStudent = {};
	self.newAssignment = {};
	self.assignmentList = [];

	self.addAssignment = function(){
		self.newAssignment.weighted = Calc.getWeightedGrade(self.newAssignment.rawGrade);
		var myAssignment = new Assignment(self.newAssignment);
		self.assignmentList.push(myAssignment);
	};
});