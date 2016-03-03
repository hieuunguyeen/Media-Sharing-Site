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
        .when('/singleItem/:itemId', {
            templateUrl: 'views/pages/singleItem-page.html',
            controller: "singleItemController"
        })
        .when('/search-page', {
            templateUrl: 'views/pages/search-page.html',
            controller: 'searchPageController'
        })
        .otherwise({
            redirectTo: '/hot'
        });
});
