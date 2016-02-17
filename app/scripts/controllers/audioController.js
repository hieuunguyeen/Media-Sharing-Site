angular.module('myApp')
    .controller('audioController', function ($scope, audioFactory) {
        $scope.loadSong = function (args) {
            audioFactory.loadSong(args);
            console.log("Tile!");
        };
    });