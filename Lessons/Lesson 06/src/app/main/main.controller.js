(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(PeopleResource, FriendsResource) {
    var self = this;

    var myPeopleResourceObject = PeopleResource;

    var peoplePromise = PeopleResource.getPeople({
    	page: 2,
    	searchBy: 'name',
    	searchVal: 'corey'
    }).$promise;

    peoplePromise.then(function onSuccess(peopleResponse) {
		self.people = peopleResponse;
    }, function onError(errorResponse){
		console.log(errorResponse)
    });

    self.viewFriends = function(person){
		FriendsResource.query({
			personId: person._id
		}).$promise
		.then(function onSucces(friendsResponse){
			person.friends = friendsResponse;
		})
    };

	// var peoplePromise = PeopleResource.getPeople({
 //    	page: 2,
 //    	searchBy: 'name',
 //    	searchVal: 'corey'
 //    }, function onSuccess(peopleResponse) {
	// 	self.people = peopleResponse;
 //    }, function onError(errorResponse){
	// 	console.log(errorResponse)
 //    });




    self.greeting = "Hello World";

  }
})();
