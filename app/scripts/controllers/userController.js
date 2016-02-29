angular.module('myApp')
    .controller('userController', function ($scope, ajaxFactory, $localStorage, $window) {
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
                        $window.location.reload();
                        // $location.path();
                        // $location.path('/hot');
                        // $scope.closeLogin();
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
            $window.location.reload();
            // $location.path();
            // $location.path('/hot');
        };

        //Signup
        $scope.postRegister = function() {
            var fd = {
                'username': $scope.signupUsername,
                'password': $scope.signupPassword,
                'email': $scope.email
            };

            if (!$scope.retypePasswordWrong && !$scope.usernameExists) {
                ajaxFactory.postRegisterForm(fd).then(function (success) {
                    $scope.loginUsername =  $scope.signupUsername;
                    $scope.loginPassword = $scope.signupPassword;
                    console.log(success.data);
                    $scope.login();
                }, function (error) {
                    console.log(error.data);
                });

                // $window.location.reload();
            } else {
                alert('Check your fields');
            }
        }

        //Check if username excists
        $scope.userExists = function() {
            var fd = {
                'username': $scope.signupUsername
            };
            ajaxFactory.userAlreadyExists(fd)
                .then(function(success) {
                    if (success.data.userFound == true) {
                        $scope.usernameExists = true;
                    } else {
                        $scope.usernameExists = false;
                    }
                }, function(err) {
                    console.log(err);
                })
        };

        //Check retype-password
        $scope.retypeWrong = function() {
            if ($scope.rePassword != $scope.signupPassword) {
                $scope.retypePasswordWrong = true;
            } else {
                $scope.retypePasswordWrong = false;
            }
        }

        // interaction functions
        $scope.closeLogin = function() {
            $('body').removeClass('body--overlay');
            $('.modal--login').removeClass('modal-box--cover');
        };
    });
