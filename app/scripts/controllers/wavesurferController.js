angular.module('myApp')
    .controller('wavesurferController', function ($scope, audioFactory) {
        //Controls for audio player
        $scope.playing = false;
        $scope.show = true;
        $scope.mute = false;
        $scope.length = 0;
        $scope.currentTime = 0;

        $scope.$on('songReady', function () {
            $scope.length = audioFactory.getDuration();
            $scope.playing = true;
            $scope.show = true;
            $('#waveform .loading-indication').css('opacity', 0);
            $('#waveform .loading-indication').css('width', 0 + '%');
            $scope.$apply();
        });

        $scope.$on('songFinished', function () {
            $scope.playing = false;
            $scope.show = false;
            $scope.$apply();
        });
        
        $scope.$on('buffering', function () {
            $('#waveform .loading-indication').css('opacity', 1);
            $('#waveform .loading-indication').css('width', audioFactory.percent + '%');
            
        });
        
        $scope.$on('currentlyPlaying', function () {
            $scope.currentTime = audioFactory.getCurrentTime();
        });

        $scope.playPause = function () {
            audioFactory.playPause();
            $scope.playing = !$scope.playing;
            $scope.show = !$scope.show;
        };
        
        $scope.muteToggle = function () {
            audioFactory.mute();
            $scope.mute = !$scope.mute;
        };
    });