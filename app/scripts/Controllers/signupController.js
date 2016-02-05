angular.module('myApp')
    .controller('signupController', function ($scope, ajaxFactory,$httpParamSerializer) {

        $scope.postRegister = function() {
        	var fd = {
        		'username': $scope.username,
        		'password': $scope.password,
        		'email': $scope.email
        	};

    		if ($scope.rePassword === $scope.password) {
    			ajaxFactory.postRegisterForm(fd);
    		} else {
    			alert('Wrong retype password');
    		}
        }
    });