angular.module('myApp')
    .directive('lightBox', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/modal-lightbox.html'
        }
    });
