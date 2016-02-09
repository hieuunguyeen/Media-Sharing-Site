// ## Get data ##
// $scope
//
// var hotPageItemLimit : Number of items that will be display on homepage
// var allImages / allVideo / allAudio: contains all images received from server
// function runAll : Get all items

angular.module('myApp')
    .controller('remoteDataController', function($scope, $http, $sce, $interval, ajaxFactory) {

        var link = 'http://util.mw.metropolia.fi/uploads/';

        $scope.increaseLimit = function() {
            $scope.itemLimit += 1;
        }

        //Load all content
        $scope.runAll = function() {
            $scope.hotPageItemLimit = 10;
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
    });
