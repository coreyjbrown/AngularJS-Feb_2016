angular.module('MyServices', [])

.factory('Assignment', function () {
	function Assignment(params){
		angular.extend(this, params);
	}

	return Assignment;
})

.service('Calc', function () {
	var self = this;

	self.getWeightedGrade = function(rawGrade){
		var weightedGrade = rawGrade / 100;
		return weightedGrade;
	};
});