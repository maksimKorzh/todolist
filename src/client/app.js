var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'TasksController',
		templateUrl: 'list.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});