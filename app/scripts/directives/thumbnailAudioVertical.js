angular.module('myApp')
    .directive('thumbnailAudioVertical', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/thumbnail-audio-vertical.html'
        }
    });
