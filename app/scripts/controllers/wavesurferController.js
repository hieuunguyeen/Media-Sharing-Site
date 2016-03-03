angular.module('myApp')
    .controller('wavesurferController', function ($scope, audioFactory) {
        //Controls for audio player
        $scope.playing = false;
        $scope.show = false;
        $scope.mute = false;
        $scope.length = 0;
        $scope.currentTime = 0;

        $scope.$on('songReady', function () {
            $scope.length = new Date(1970, 0, 1).setSeconds(audioFactory.getDuration());
            $scope.playing = true;
            $scope.show = true;
            $('#waveform .loading-indication').css('opacity', 0);
            $('#waveform .loading-indication').css('width', 0 + '%');
            $scope.update = setInterval(function() {
                $scope.currentTime = new Date(1970, 0, 1).setSeconds(audioFactory.getCurrentTime());
                $scope.$apply();
            }, 1000);
            $scope.$apply();
        });

        $scope.$on('songFinished', function () {
            $scope.playing = false;
            $scope.$apply();
        });
        
        $scope.$on('buffering', function () {
            $('#waveform .loading-indication').css('opacity', 1);
            $('#waveform .loading-indication').css('width', audioFactory.percent + '%');
        });
        /*$scope.$on('currentlyPlaying', function () {
            $scope.currentTime = new Date(1970, 0, 1).setSeconds(audioFactory.getCurrentTime());
            console.log($scope.currentTime);
            $scope.$apply();
        });*/
        $scope.showToggle = function () {
            $scope.show = !$scope.show;
        };
        $scope.playPause = function () {
            audioFactory.playPause();
            $scope.playing = !$scope.playing;
        };
        
        $scope.muteToggle = function () {
            audioFactory.mute();
            $scope.mute = !$scope.mute;
        };
    });