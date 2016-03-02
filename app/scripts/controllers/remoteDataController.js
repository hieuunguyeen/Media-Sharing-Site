// ## Get data ##
// $scope
//
// var hotPageItemLimit : Number of items that will be display on homepage
// var allImages / allVideo / allAudio: contains all images received from server
// function runAll : Get all items

angular.module('myApp')
    .controller('remoteDataController', function($scope, $http, $sce, $interval, ajaxFactory, mediaFactory) {

        var link = 'http://util.mw.metropolia.fi/uploads/';

        $scope.itemLimit = 10;

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
                }, function(error) {
                    console.log(error.data);
                });
        }

        $scope.getAudios = function() {
            ajaxFactory.getFiles('audio')
                .then(function(success) {
                    $scope.allAudios = success.data;
                }, function(error) {
                    console.log(error.data);
                });
        }

        $scope.getVideos = function() {
            ajaxFactory.getFiles('video')
                .then(function(success) {
                    $scope.allVideos = success.data;
                }, function(error) {
                    console.log(error.data);
                });
        }

        $scope.getUserItems = function(userId) {
            ajaxFactory.getFilesByUserId(userId)
                .then(function(success) {
                    $scope.userItems = success.data;
                    console.log($scope.userItems);
                }, function(error) {
                    console.log(error.data);
                });
        }

        $scope.trustURL = function(url) {
            return $sce.trustAsResourceUrl(url);
        };        
    });
