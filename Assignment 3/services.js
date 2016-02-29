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

	self.getGrade = function(average){
		var grade = average >= 0.9 ? 'A' : average >= 0.8 ? 'B' : average >= 0.7 ? 'C' : average >= 0.6 ? 'D' : 'F';

		// switch(student){
		// 	case student.average >= 0.9:
		// 		grade = 'A';
		// 		break;
		// 	case student.average >= 0.8 && student.average < 0.9:
		// 		grade = 'B';
		// 		break;
		// 	case student.average >= 0.7 && student.average < 0.8:
		// 		grade = 'C';
		// 		break;
		// 	case student.average >= 0.6 && student.average < 0.7:
		// 		grade = 'D';
		// 		break;
		// 	default:
		// 		grade = 'F';
		// 		break;
		// }
		return grade;
	};

	self.getPassing = function(grade){
		var passing = grade == 'A' || grade == 'B' || grade == 'C' ? 'True' : 'False';
		return passing;
	};
});