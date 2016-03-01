angular.module('MyServices', [])

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
])

.factory('User', [function(Songs) {
	function User(newUser){
		angular.extend(this, newUser);
		this.songlist = [];
	}

	User.prototype.generateSongList = function(){
		var self = this;
		var mySongs = Songs;
		var isExplicit = self.explicit ? true : false;
		mySongs.filter(function(e){
			return e.isSelected;
		}).map(function(e){
			return {
				name: e.name,
				genre: e.genre,
				explicit: isExplicit
			};
		}).forEach(function(e){
			self.songList.push(e);
		});
		console.log(self.songlist);
	};

	return User;
}])

;