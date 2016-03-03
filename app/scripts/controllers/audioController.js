angular.module('myApp')
    .controller('audioController', function ($scope, audioFactory, ajaxFactory) {
        $scope.loadSong = function (args) {
            audioFactory.loadSong(args);
            console.log("Tile!");
        };
        $scope.getUserById = function (userId) {
            ajaxFactory.getUserById(userId).then(function (success) {
                return success.data['username'];
            });
        };
    });