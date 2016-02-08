angular.module('myApp')
    .factory('mediaFactory', function () {
        var mediaVariables = {
            mediaUrl: 'http://util.mw.metropolia.fi/uploads/',
            userData: {},
            mediaData: {},
        };

        mediaVariables.setVariables = function (key, value) {
            mediaVariables[key] = value;
        };

        mediaVariables.handleError = function (error) {
            console.log(error.data);
        };

        return mediaVariables;
    });