angular.module('MyApp', [])

.controller('MainController', function(){
	var self = this;
	self.greeting = 'Hello World!!!';

	self.username = 'Tommy';

	self.simpleArray = ['Item1', 'Item2', 'Item3'];

	self.interArray = [{
		name: 'george'
	}, {
		name: 'Harry'
	}, {
		name: 'Sally'
	}];

	self.states = {
		CA: 'California',
		NY: 'New York',
		MN: 'Minnesota'
	};

	self.select = true;
	self.myDog = {
		name: 'Max'
	};

	self.myCat = {
		name: 'Bergen'
	};

	self.myCow = {
		name: 'Elsie'
	};

	self.onButtonClick = function(){
		alert('you clicked the button');
	};

	self.classObject = {
		red: false,
		green: false,
		yellow: false
	}
});
