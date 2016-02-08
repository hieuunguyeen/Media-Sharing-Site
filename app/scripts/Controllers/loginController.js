angular.module('myApp')
    .controller('loginController', function ($scope, ajaxFactory) {
        $scope.username = '';
    	$scope.password = '';

    	$scope.postLogin = function() {
    		$scope.fd = new FormData(angular.element('#login-form')[0]);
    		$scope.fd.append('username', $scope.username);
    		$scope.fd.append('password', $scope.password);

    		ajaxFactory.postLogin($scope.fd);
    	}
    });
