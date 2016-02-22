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
});