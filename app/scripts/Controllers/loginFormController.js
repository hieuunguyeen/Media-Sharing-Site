angular.module('myApp')
    .controller('loginFormController', function ($scope, $http, $httpParamSerializer, ajaxFactory) {

        $scope.login = function () {
            var userData = {
                'username': $scope.username,
                'password': $scope.password
            };

            console.log(userData);
            ajaxFactory.userLogin(userData)
                .then(function (success) {
                    console.log(success.data);
                }, function (success) {
                    console.log(success.data);
                });
        };
    });
