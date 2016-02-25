angular.module('MyApp', ['MyServices'])

.controller('MainController', function(Car, MathCalculator) {
	var self = this;

	self.car1 = new Car('Accord');

	console.log(MathCalculator.calculateSum(20, 5));
})

.controller('SecondController', function () {
	
});