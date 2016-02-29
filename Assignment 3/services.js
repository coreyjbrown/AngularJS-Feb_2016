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

.value('scale', {
	A: 0.9,
	B: 0.8,
	C: 0.7,
	D: 0.6
})

.service('Calc', [function () {
	var self = this;

	self.getAverage = function(assignments){
		var total = 0;
		assignments.forEach(function(e){
			total += e.grade;
		});
		return total/assignments.length;
	};

	self.getGrade = function(average, scale){
		var grade = average >= scale.A ? 'A' : average >= scale.B ? 'B' : average >= scale.C ? 'C' : average >= scale.D ? 'D' : 'F';
		return grade;
	};

	self.getPassing = function(grade){
		var passing = grade == 'A' || grade == 'B' || grade == 'C' ? 'True' : 'False';
		return passing;
	};
}]);