angular.module('myApp')
    .controller('wavesurferController', function ($scope, audioFactory) {
        //Controls for audio player
        $scope.playing = false;
        $scope.show = false;
        $scope.mute = false;
        $scope.length = 0;
        $scope.currentTime = 0;

        var updateTime = function () {
            $scope.currentTime = new Date(1970, 0, 1).setSeconds(audioFactory.getCurrentTime());
            $scope.$digest();
        };

        $scope.$on('songReady', function () {
            $scope.length = new Date(1970, 0, 1).setSeconds(audioFactory.getDuration());
            $scope.playing = true;
            $scope.show = true;
            $('#waveform .loading-indication').css('opacity', 0);
            $('#waveform .loading-indication').css('width', 0 + '%');
            $scope.update = setInterval(updateTime, 1000);
            $scope.startAutohide();
        });

        $scope.$on('songFinished', function () {
            $scope.playing = false;
            clearInterval($scope.update);
            $scope.$digest();
        });

        $scope.$on('buffering', function () {
            $scope.show = true;
            $scope.$digest();
            $('#waveform .loading-indication').css('opacity', 1);
            $('#waveform .loading-indication').css('width', audioFactory.percent + '%');
        });

        $scope.$on('seeking', function () {
            updateTime();
        });

        $scope.startAutohide = function () {
            // $scope.autohide = setTimeout(function () { $scope.show = false; }, 3000);
        };
        $scope.cancelAutohide = function () {
            clearTimeout($scope.autohide);
        };

        $scope.showToggle = function () {
            $scope.show = !$scope.show;
        };
        $scope.loadSong = function (args) {
            clearInterval($scope.update);
            audioFactory.loadSong(args);
        };
        $scope.playPause = function () {
            audioFactory.playPause();
            $scope.playing = !$scope.playing;
            if ($scope.playing == false) {
                clearInterval($scope.update);
            } else {
                $scope.update = setInterval(updateTime, 500);
            }
        };

        $scope.muteToggle = function () {
            audioFactory.mute();
            $scope.mute = !$scope.mute;
        };
    });