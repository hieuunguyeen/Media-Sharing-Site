angular.module('myApp').config( function($routeProvider) {
    $routeProvider
        .when('/hot', {
            templateUrl: 'views/pages/hot-page.html',
            controller: 'remoteDataController'
        })
        .when('/explore-image', {
        	templateUrl: 'views/pages/image-page.html',
        	controller: 'remoteDataController'
        })
        .when('/explore-video', {
        	templateUrl: 'views/pages/video-page.html',
        	controller: 'remoteDataController'
        })
        .when('/explore-audio', {
        	templateUrl: 'views/pages/audio-page.html',
        	controller: 'remoteDataController'
        })
        .when('/profile', {
            templateUrl: 'views/pages/profile-page.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/hot'
        });
});