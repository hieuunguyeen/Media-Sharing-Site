angular.module('myApp')
    .controller('headerController', function ($scope, $localStorage) {
        $scope.loggedIn = false;
        if ($localStorage.userId !== undefined) {
            $scope.loggedIn = true;
        }
    });