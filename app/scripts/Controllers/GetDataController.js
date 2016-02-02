angular.module('myApp', [])
    .controller('GetDataController', function($scope, $http, $sce) {

        var link = 'http://util.mw.metropolia.fi/uploads/'

        // Get Image
        $scope.getImages = function() {
            $http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/image')
                .then(function(result) {
                    $scope.allImages = result.data;
                }, function(result) {
                    console.log(result);
                });
        };

        // Get Vid
        $scope.getVideo = function() {
            $http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/video')
                .then(function(result) {
                    $scope.allVideos = result.data;

                    console.log(result);
                }, function(result) {
                    console.log(result);
                });
        };

        //Get Audio
        $scope.getAudio = function() {
            $http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/audio')
                .then(function(result) {
                    $scope.allAudios = result.data;
                    console.log(result);
                }, function(result) {
                    console.log(result);
                });
        };

        //Load all content
        $scope.runAll = function() {
            $scope.getImages();
            $scope.getVideo();
            $scope.getAudio();
        };

        //transform to trusted link for videos and audio
        //Usa like this:
        //<source ng-src="{{trustURL('http://util.mw.metropolia.fi/uploads/' + video.path)}}">
        $scope.trustURL = function(videoUrl) {
            return $sce.trustAsResourceUrl(videoUrl);
        };
    });
