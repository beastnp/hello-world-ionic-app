angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'features/main/main.html',
            controller: 'MainCtrl'
        })

        .state('page2', {
            url: '/page2',
            templateUrl: 'features/page2/page2.html',
            controller: 'Page2Ctrl'
        });

    $urlRouterProvider.otherwise('/main');

});