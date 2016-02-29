angular.module('myApp')
    .factory('audioFactory', function ($rootScope) {
        //Wavesurfer config
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            height: 40,
            waveColor: 'black',
            progressColor: '#de3b59',
            barWidth: 2
        });
        
        wavesurfer.on('ready', function () {
            console.log("Ready to play!");
            $rootScope.$broadcast('songReady');
            wavesurfer.play();
        });
        
        wavesurfer.on('finish', function () {
            $rootScope.$broadcast('songFinished');
        });
        
        //Functions
        var audioFunctions = {};
        
        audioFunctions.loadSong = function (args) {
            wavesurfer.load(args);
        };
        
        audioFunctions.playPause = function () {
            wavesurfer.playPause();
        };
        
        audioFunctions.mute = function () {
            wavesurfer.toggleMute();
        };
        
        audioFunctions.getDuration = function () {
            return wavesurfer.getDuration();
        };
        
        audioFunctions.getCurrentTime = function () {
            return wavesurfer.getCurrentTime();
        };
        
        return audioFunctions;
    })