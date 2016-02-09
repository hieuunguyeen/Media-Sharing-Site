angular.module('myApp')
    .controller('userController', function ($scope, ajaxFactory, $localStorage) {
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
                    $scope.$storage = $localStorage.$default({
                        userId: success.data.userId // fetch with $localStorage.userId
                    });
                }, function (err) {
                    console.log(err.data);
                });
        };

        //Signup
        $scope.postRegister = function () {
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

        // interaction functions
        $('.close-button').click(function () {
            $('body').removeClass('body--overlay');
            $('.overlay').removeClass('overlay--cover');
            $('.modal--login').removeClass('modal-box--cover');
        });
    });
