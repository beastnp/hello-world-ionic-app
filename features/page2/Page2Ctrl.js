angular.module('ionicApp').controller('Page2Ctrl', function ($scope, userService) {

    userService.getUsers().then(function (users) {
        $scope.users = users;
    });

});