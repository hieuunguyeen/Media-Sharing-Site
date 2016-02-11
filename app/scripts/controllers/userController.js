angular.module('myApp')
    .controller('userController', function ($scope, ajaxFactory, $localStorage) {
        var userctrl = this;

        //Login
        $scope.wrongLogin = false;
        $scope.login = function () {
            var userData = {
                'username': $scope.loginUsername,
                'password': $scope.loginPassword
            };

            ajaxFactory.userLogin(userData)
                .then(function (success) {
                    if (success.data.error == undefined) {
                        $scope.$storage = $localStorage.$default({
                            userId: success.data.userId // fetch with $localStorage.userId
                        });
                    } else {
                        console.log("Wrong login");
                        $scope.wrongLogin = true;
                    }
                }, function (err) {
                    console.log(err.data);
                });
        };
        //Login check
        $scope.loggedIn = false;
        if ($localStorage.userId !== undefined) {
            $scope.loggedIn = true;
        }
        //Logout
        $scope.logout = function () {
            console.log("asd");
            delete $localStorage.userId;
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
        $scope.closeLogin = function () {
            $('body').removeClass('body--overlay');
            $('.modal--login').removeClass('modal-box--cover');
        };
    });
