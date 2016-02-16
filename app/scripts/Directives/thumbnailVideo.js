angular.module('myApp')
    .directive('thumbnailVideo', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/thumbnail-video.html'
        }
    });
