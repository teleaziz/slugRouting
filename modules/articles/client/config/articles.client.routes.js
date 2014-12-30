'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('articles', {
			abstract: true,
			url: '/articles',
			template: '<ui-view/>'
		}).
		state('articles.list', {
			url: '',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('articles.create', {
			url: '/create',
			templateUrl: 'modules/articles/views/create-article.client.view.html'
		}).
		state('articles.view', {
			url: '/:articleSlug',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('articles.edit', {
			url: '/:articleSlug/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
