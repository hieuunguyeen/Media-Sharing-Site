angular.module('myApp')
    .controller('uploadController', function ($scope, $rootScope, mediaFactory, ajaxFactory, $localStorage) {

        $scope.setMediaFile = function(element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = element.files[0].type.split('/')[0];
        };

        $scope.postImage = function() {
            console.log($localStorage.userId);
            $scope.fd = new FormData(document.getElementById('uploadForm')); //change this to the upload form ID
            $scope.fd.append('user', $localStorage.userId); //change this user to the logged in user
            $scope.fd.append('type', $scope.type); //read type (image/audio/video) from the form, or remove and add form input
            $scope.fd.append('mime-type', $scope.mimeType); //For example video/mp4 or audio/mp3

            /* #EXAMPLE#
            <form if="uploadForm">
                <input name="file" type="file" onchange="angular.element(this).scope().setMediaFile(this)">
                <input name="title" type="text">
                <input name="description" type="text">
                <button ng-click="postImage();">Upload</button>
            </form>
            */

            var request = ajaxFactory.uploadFile($scope.fd);

            request.then(function (response) {
                console.log(response.data);
            }, function (err) {
                console.log(err.data);
            });
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
