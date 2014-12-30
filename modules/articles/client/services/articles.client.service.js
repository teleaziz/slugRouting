'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('api/articles/:articleId/:controller', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			} ,
          getBySlug: {
                method: 'GET',
                params: {
                  controller: 'read-slug'
                }
          }
		});
	}
]);
