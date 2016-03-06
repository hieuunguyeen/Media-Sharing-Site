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
            $rootScope.$broadcast('songReady');
            wavesurfer.play();
        });
        
        wavesurfer.on('finish', function () {
            $rootScope.$broadcast('songFinished');
        });
        
        wavesurfer.on('loading', function (percent) {
            audioFunctions.setVariables('percent', percent);
            $rootScope.$broadcast('buffering');
        });
        
        wavesurfer.on('seek', function (percent) {
            $rootScope.$broadcast('seeking');
        });
        
        //Functions
        var audioFunctions = {
            'percent': 0
        };
        
        audioFunctions.setVariables = function (key, value) {
            audioFunctions[key] = value;
        };
        
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