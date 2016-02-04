angular.module('myApp')
    .directive('loginForm', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/modal-loginSignup.html'
        }
    });
