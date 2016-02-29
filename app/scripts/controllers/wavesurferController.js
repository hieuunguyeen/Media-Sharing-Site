angular.module('myApp')
    .controller('wavesurferController', function ($scope, audioFactory) {
        //Controls for audio player
        $scope.playing = false;
        $scope.show = false;
        $scope.mute = false;

        $scope.$on('songReady', function () {
            $scope.length = audioFactory.getDuration();
            console.log(audioFactory.getDuration());
            $scope.playing = true;
            $scope.show = true;
            $scope.$apply();
        });

        $scope.$on('songFinished', function () {
            $scope.playing = false;
            $scope.show = false;
            $scope.$apply();
        });

        $scope.playPause = function () {
            audioFactory.playPause();
            $scope.playing = !$scope.playing;
            $scope.show = !$scope.show;
        };
        
        $scope.muteToggle = function () {
            console.log("Before mute");
            audioFactory.mute();
            console.log("After mute");
            $scope.mute = !$scope.mute;
        };
    });