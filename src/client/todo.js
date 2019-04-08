var app = angular.module('app');

app.controller('TasksController', ['$scope', '$http', '$location', '$routeParams', 
                function($scope, $http, $location, $routeParams){
	$scope.getTasks = function(){
		$http.get('/api/tasks').then(function (response){
		  $scope.tasks = response; // console.log($scope.tasks.data[1]);
		   },function (error){
		     if(error){
		      throw error;
		     }
		   });
	}

}]);