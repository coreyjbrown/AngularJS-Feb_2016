(function(){

	angular.module('template')

	.factory('PeopleResource', function ($resource) {
		return $resource('assets/json/sampleData.json', {
			page: 1,
			limit: 50
		}, {
			getPeople: {
				method: 'GET',
				isArray: true,
				headers: {
					Accept: 'application/json'
				}
			}
		});
	})

	.factory('FriendsResource', function ($resource) {
		return $resource('assets/json/:personId/friends.json', {
			personId: '@personId'
		});
	});

})();