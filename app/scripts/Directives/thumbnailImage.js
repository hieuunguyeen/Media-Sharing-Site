angular.module('myApp')
    .directive('thumbnailImage', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/thumbnail-image.html',
            
        }
    });
