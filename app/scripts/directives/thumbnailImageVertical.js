angular.module('myApp')
    .directive('thumbnailImageVertical', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/thumbnail-image-vertical.html'
        }
    });
