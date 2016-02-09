angular.module('myApp')
    .controller('uploadController', function ($scope, $rootScope, mediaFactory, ajaxFactory) {

        $scope.setMediaFile = function(element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = element.files[0].type.split('/')[0];
        };

        $scope.postImage = function() {
            console.log('posting image');
            $scope.fd = new FormData(document.getElementById('uploadForm')); //change this to the upload form ID
            $scope.fd.append('user', 5); //change this user to the logged in user
            $scope.fd.append('type', $scope.type); //read type (image/audio/video) from the form, or remove and add form input
            $scope.fd.append('mime-type', $scope.mimeType); //For example video/mp4 or audio/mp3
            console.log('form built');

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
            $('.overlay').removeClass('overlay--cover');
            $('.modal--upload').removeClass('modal-box--cover');
        };
    });
