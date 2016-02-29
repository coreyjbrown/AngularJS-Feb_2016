angular.module('MyApp', ['MyServices'])

.controller('MainController', function(MY_CARS, $timeout, Car){
	var self = this;
	self.myCars = MY_CARS;

	self.myCar = new Car('Ford');
})

.controller('SecondController', function(MY_CARS){
	var self = this;
});