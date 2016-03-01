angular.module('MyServices', [])

.factory('User', [function () {
	function User(newUser){
		angular.extend(this, newUser);
		this.songlist = [];
	}

	User.prototype.addSong = function(newSong){
		var mySong = newSong;
		this.songlist.push(mySong);
	};

	return User;
}])

.value('Songs', [
	{
		name: 'Sweet Home Alabama',
		genre: 'Rock'
	},
	{
		name: 'Thunderstruck',
		genre: 'Rock'
	},
	{
		name: 'Panama',
		genre: 'Rock'
	},
	{
		name: 'Gin & Juice',
		genre: 'Rap'
	},
	{
		name: 'Tricky',
		genre: 'Rap'
	},
	{
		name: 'Juicy',
		genre: 'Rap'
	},
	{
		name: 'I Want It That Way',
		genre: 'Pop'
	},
	{
		name: 'Genie in a Bottle',
		genre: 'Pop'
	},
	{
		name: ' . . . One More Time',
		genre: 'Pop'
	}
]);