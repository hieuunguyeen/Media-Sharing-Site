angular.module('myApp')
    .directive('thumbnailAudio', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/thumbnail-audio.html'
        }
    });
