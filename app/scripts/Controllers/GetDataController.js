// $scope
//
// var hotPageItemLimit : Number of items that will be display on homepage
// var allImages / allVideo / allAudio: contains all images received from server
// function runAll : Get all items

angular.module('myApp')
    .controller('getDataController', function($scope, $http, $sce, $interval, ajaxFactory) {

        var link = 'http://util.mw.metropolia.fi/uploads/';

        console.log('getDataController is working?');

        //Load all content
        $scope.runAll = function() {

        	$scope.hotPageItemLimit = 20;

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

            $interval($scope.runAll, 1000*60*15);
        };

        //transform to trusted link for videos and audio
        //Usa like this:
        //<source ng-src="{{trustURL('http://util.mw.metropolia.fi/uploads/' + video.path)}}">
        $scope.trustURL = function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    });
