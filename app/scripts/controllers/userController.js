angular.module('myApp')
    .controller('userController', function ($scope, ajaxFactory) {
        //Login
        $scope.login = function () {
            var userData = {
                'username': $scope.loginUsername,
                'password': $scope.loginPassword
            };

            console.log(userData);
            ajaxFactory.userLogin(userData)
                .then(function (success) {
                    console.log(success.data);
                }, function (success) {
                    console.log(success.data);
                });
        };
        
        //Signup
        $scope.postRegister = function() {
        	var fd = {
        		'username': $scope.signupUsername,
        		'password': $scope.signupPassword,
        		'email': $scope.email
        	};

    		if ($scope.rePassword === $scope.signupPassword) {
    			ajaxFactory.postRegisterForm(fd);
    		} else {
    			alert('Wrong retype password');
    		}
        }
    });
