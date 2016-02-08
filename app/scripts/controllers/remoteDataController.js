// ## Get data ##
// $scope
//
// var hotPageItemLimit : Number of items that will be display on homepage
// var allImages / allVideo / allAudio: contains all images received from server
// function runAll : Get all items

angular.module('myApp')
    .controller('remoteDataController', function($scope, $http, $sce, $interval, ajaxFactory) {

        var link = 'http://util.mw.metropolia.fi/uploads/';

        console.log('remoteDataController is working?');

        //Load all content
        $scope.runAll = function() {

            $scope.hotPageItemLimit = 20;
            $scope.getImages();
            $scope.getAudios();
            $scope.getVideos();
            $interval($scope.runAll, 1000 * 60 * 15);
        };

        $scope.getImages = function() {
            ajaxFactory.getFiles('image')
                .then(function(success) {
                    $scope.allImages = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        }

        $scope.getAudios = function() {
            ajaxFactory.getFiles('audio')
                .then(function(success) {
                    $scope.allAudios = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        }

        $scope.getVideos = function() {
            ajaxFactory.getFiles('video')
                .then(function(success) {
                    $scope.allVideos = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        }

        //transform to trusted link for videos and audio
        //Usa like this:
        //<source ng-src="{{trustURL('http://util.mw.metropolia.fi/uploads/' + video.path)}}">
        $scope.trustURL = function(url) {
            return $sce.trustAsResourceUrl(url);
        };

        // ## Upload ##
        // $scope
        //
        // var mimetype : media mime type
        // var type : media real type
        // function setMediaFile: get data from the uploaded media
        // function postImage : send media to server


        $scope.setMediaFile = function(element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = element.files[0].type.split('/')[0];
        };

        $scope.postImage = function() {
            $scope.fd = new FormData(angular.element('#uploadForm')[0]); //change this to the upload form ID
            $scope.fd.append('user', 5); //change this user to the logged in user
            $scope.fd.append('title', 'title'); //read title from the form, or remove and add form input
            $scope.fd.append('description', 'description'); //read description from the form, or remove and add form input
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

            ajaxFactory.uploadFile($scope.fd);

            /* #Debugging#
            request.then(function (response) {
                console.log(response);
            }, function (err) {
                console.log(err);
            });*/
        };
    });
