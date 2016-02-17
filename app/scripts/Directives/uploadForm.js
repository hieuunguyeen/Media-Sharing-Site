angular.module('myApp')
    .directive('uploadForm', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/modal-upload.html'
        }
    });
