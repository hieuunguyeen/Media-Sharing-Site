angular.module('myApp')
    .controller('getDataController', function($scope, $http, $sce, $interval, ajaxFactory) {

        var link = 'http://util.mw.metropolia.fi/uploads/';

        console.log('getDataController is working?');

        //Load all content
        $scope.runAll = function() {
            ajaxFactory.getFiles('image')
                .then(function (success) {
                    $scope.allImages = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });

            ajaxFactory.getFiles('audio')
                .then(function (success) {
                    $scope.allAudios = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });

            ajaxFactory.getFiles('video')
                .then(function (success) {
                    $scope.allVideos = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });

            $interval($scope.runAll, 150000);
        };

        //transform to trusted link for videos and audio
        //Usa like this:
        //<source ng-src="{{trustURL('http://util.mw.metropolia.fi/uploads/' + video.path)}}">
        $scope.trustURL = function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    });
