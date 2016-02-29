angular.module('MyServices', [])

.factory('Car', function(){
	function Car(name){
		this.name = name;
	}

	Car.prototype.setMake = function(make){
		this.make = make;
	};

	Car.prototype.setYear = function(year){
		this.year = year;
	};

	Car.buildGenericCar = function(){
		return new Car('BMW');
	};

	return Car;
})

.value('hhh', {})

.value('api_key', '123456')

.value('MY_CARS', [{
	make: 'Ford',
	model: 'Mustang'
}, {
	make: 'Honda',
	model: 'Accord'
}, {
	make: 'Toyota',
	model: 'Camry'
}]);