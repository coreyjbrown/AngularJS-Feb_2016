angular.module('MyApp', [])

.controller('MainController', function(){
	var self = this;

	self.themeClass = {
		ylw: false,
		bl: false,
		grn: false,
		rd: false,
		nne: true
	};

	self.expand = false;
	self.newTeam = "";
	self.addTeamToDivision = function(){
	};
	self.divisions = {
		East: ['Blue Jays', 'Orioles', 'Rays'],
		Central: ['Twins', 'Tigers', 'White Sox'],
		West: ['Angels', 'Mariners', 'Rangers']
	};
});