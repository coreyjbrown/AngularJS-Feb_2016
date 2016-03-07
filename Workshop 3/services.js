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
		this.name = newUser.name;
		this.age = newUser.age;
		this.songlist = [];
	}

	User.prototype.generateSongList = function(Songs){
		var self = this;
		var mySongs = Songs;
		var version = self.explicit ? 'Explicit' : 'Clean';
		var filteredSongs = mySongs.filter(function(e){
			return e.isSelected;
		}).map(function(e){
			return {
				name: e.name,
				genre: e.genre,
				version: version
			};
		});

		filteredSongs.forEach(function(e){
			self.songlist.push(e);
		});
		console.table(self.songlist);
	};

	User.prototype.getVersions = function(explicit){
		this.explicit = explicit;
	};

	return User;
}])

;