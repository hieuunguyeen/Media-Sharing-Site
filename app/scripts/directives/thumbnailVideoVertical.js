angular.module('myApp')
    .directive('thumbnailVideoVertical', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/thumbnail-video-vertical.html'
        }
    });
