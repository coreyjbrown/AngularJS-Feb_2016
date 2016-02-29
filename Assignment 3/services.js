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

	self.getAverage = function(assignments){
		var total = 0;
		assignments.forEach(function(e){
			total += e.grade;
		});
		return total/assignments.length;
	};

	self.getGrade = function(student){
		var grade = '';

		switch(student){
			case student.average >= 0.9:
				grade = 'A';
				break;
			case student.average >= 0.8:
				grade = 'B';
				break;
			case average >= 0.7 && average < 0.8:
				grade = 'C';
				break;
			case average >= 0.6 && average < 0.7:
				grade = 'D';
				break;
			default:
				grade = 'F';
				break;
		}
		return grade;
	};
});