angular.module('myApp')
    .controller('wavesurferController', function ($scope, audioFactory) {
        //Controls for audio player
        $scope.playing = false;
        $scope.hide = true;

        $scope.$on('songReady', function () {
            $scope.playing = true;
            $scope.hide = false;
            $scope.$apply();
        });

        $scope.$on('songFinished', function () {
            $scope.playing = false;
            $scope.hide = true;
            $scope.$apply();
        });

        $scope.playPause = function () {
            audioFactory.playPause();
            $scope.playing = !$scope.playing;
            $scope.hide = !$scope.hide;
        };
    });