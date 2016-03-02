angular.module('myApp')
    .controller('uploadController', function ($scope, $rootScope, $window, $timeout, $localStorage, $location, mediaFactory, ajaxFactory) {

        $scope.setMediaFile = function(element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = element.files[0].type.split('/')[0];
        };

        $scope.postImage = function() {
            if ($('input[type=file]').get(0).files.length >= 0 && $('input[name=title]').val().length > 0 && $('input[name=description]').val().length > 0) {
                //console.log($localStorage.userId);
                $scope.fd = new FormData(document.getElementById('uploadForm')); //change this to the upload form ID
                $scope.fd.append('user', $localStorage.userId); //change this user to the logged in user
                $scope.fd.append('type', $scope.type); //read type (image/audio/video) from the form, or remove and add form input
                $scope.fd.append('mime-type', $scope.mimeType); //For example video/mp4 or audio/mp3

                ajaxFactory.uploadFile($scope.fd).then(function (success) {
                    console.log(success.data.fileId);
                    
                    $timeout(function () {
                        $location.path('/singleItem/:' + success.data.fileId);
                        $window.location.reload();
                    }, 2100);
                    $('.loading-indication').addClass('loading-indication--load');
                }, function (error) {
                    console.log(error.data);
                });
            } else {
                console.log('one of the fields is missing');
            }

        };

        $scope.close = function () {
            $('body').removeClass('body--overlay');
            $('.modal--upload').removeClass('modal-box--cover');
        };

        $('.input--upload').click(function () {
            var input = $(this);
            input.on('change', function (e) {
                var fileName = '';
                fileName = e.target.value.split( '\\' ).pop();
                console.log(fileName);
                if(fileName) {
                    $('.file-name').text(fileName);
                } else {
                    $('.file-name').text('Choose a file');
                }
            });
        });
    });
