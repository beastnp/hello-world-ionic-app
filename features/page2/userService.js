angular.module('ionicApp').service('userService', function($http) {
    
       this.getUsers = function(){
			return $http.get('https://randomuser.me/api/?results=10').then(function(response){
				return response.data.results;
			});
		};
    
});