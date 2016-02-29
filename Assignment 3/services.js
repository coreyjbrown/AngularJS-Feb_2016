angular.module('MyServices', [])

.factory('Student', [function () {
	function Student(newStudent){
		this.assignments = [];
	}

	Student.prototype.addAssignment = function(newAssignment){
		var myAssignment = newAssignment;
		myAssignment.grade = myAssignment.grade / 100;
		this.assignments.push(myAssignment);
	};

	return Student;
}])

.service('Calc', function () {
	var self = this;

});