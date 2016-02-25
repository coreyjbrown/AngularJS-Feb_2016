angular.module('MyServices', [])

.service('MathCalculator', function(){
	var self = this;

	self.calculateSum = function(a, b){
		return a + b;
	};

})

.factory('Car', function(){
	
	function Car(name){
		this.name = name;
	}

	//For example purposes
	// function Car(params){
	// angular.extend(this, params);
	// }

	Car.prototype.setMake = function(make){
		this.make = make;
	};

	Car.prototype.setYear = function(year){
		this.year = year;
		this.age = 2016 - this.year;
	};

	Car.buildGenericCar = function(){
		return new Car('BMW');
	};

	return Car;
});