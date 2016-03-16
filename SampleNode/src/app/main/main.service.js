'use strict';

angular.module('sampleNode')

.factory('TodoAddResource', function($resource) {
	return $resource('/api/addtodo', null, {
		addTodo: {
			method: 'PUT',
			headers: {
				contentType: 'application/json',
				accept: 'application/json'
			}
		}
	});
})

.factory('TodoListResource', function($resource) {
	return $resource('/api/gettodos', null);
})

.factory('TodoDetailsResource', function($resource) {
	return $resource('/api/getTodoDetails/:id/', {
		id: '@id'
	} );
})

.factory('TodoUpdateResource', function($resource) {
	return $resource('/api/updateTodo', null);
});