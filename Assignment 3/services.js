angular.module('MyServices', [])

.value('scale', {
	A: 0.9,
	B: 0.8,
	C: 0.7,
	D: 0.6
})

.service('Calc', ['scale', function(scale) {
	var self = this;

	self.getAverage = function(assignments){
		var total = 0;
		assignments.forEach(function(e){
			total += e.grade;
		});
		return total/assignments.length;
	};

	self.getGrade = function(average){
		var grade = average >= scale.A ? 'A' : average >= scale.B ? 'B' : average >= scale.C ? 'C' : average >= scale.D ? 'D' : 'F';
		return grade;
	};

	self.getPassing = function(grade){
		var passing = grade == 'A' || grade == 'B' || grade == 'C' ? 'True' : 'False';
		return passing;
	};
}])

.factory('Student', ['Calc', function (Calc) {
	function Student(newAssignment){
		this.myAssignment = newAssignment;
		this.assignments = [];
	}

	Student.prototype.addAssignment = function(){
		this.grade = this.myAssignment.grade / 100;
		this.assignments.push(this.myAssignment);
		this.average = Calc.getAverage(this.assignments) || 0;
		this.grade = Calc.getGrade(this.average);
		this.passing = Calc.getPassing(this.grade);
		this.myAssignment = {};
	};

	return Student;
}]);