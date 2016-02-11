angular.module('myApp')
    .controller('userController', function($scope, ajaxFactory, $localStorage) {
        var userctrl = this;

        $scope.username = 'N/a';
        $scope.joinDate = 'N/a';
        $scope.imagesSum = 'N/a';
        $scope.videosSum = 'N/a';
        $scope.audiosSum = 'N/a';
        $scope.likesSum = 'N/a';
        $scope.viewsSum = 'N/a';

        //Login
        $scope.wrongLogin = false;
        $scope.login = function() {
            var userData = {
                'username': $scope.loginUsername,
                'password': $scope.loginPassword
            };

            ajaxFactory.userLogin(userData)
                .then(function(success) {
                    if (success.data.error == undefined) {
                        $scope.$storage = $localStorage.$default({
                            userId: success.data.userId, // fetch with $localStorage.userId
                            username: $scope.loginUsername
                        });
                        $scope.username = $scope.loginUsername;
                        $scope.userId = $scope.loginUsername;
                    } else {
                        console.log("Wrong login");
                        $scope.wrongLogin = true;
                    }
                }, function(err) {
                    console.log(err.data);
                });
        };
        //Login check
        $scope.loggedIn = false;
        if ($localStorage.userId !== undefined) {
            $scope.loggedIn = true;
            $scope.username = $localStorage.username;
            $scope.userId = $localStorage.userId;
        }
        //Logout
        $scope.logout = function() {
            delete $localStorage.userId;
            delete $localStorage.username;
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

        // interaction functions
        $scope.closeLogin = function() {
            $('body').removeClass('body--overlay');
            $('.modal--login').removeClass('modal-box--cover');
        };
    });
