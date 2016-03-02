angular.module('myApp')
    .factory('mediaFactory', function () {
        var mediaVariables = {
            mediaUrl: 'http://util.mw.metropolia.fi/uploads/',
            userData: {},
            mediaData: {},
            searchData: {}
        };

        mediaVariables.setVariables = function (key, value) {
            mediaVariables[key] = value;
        };

        mediaVariables.handleError = function (error) {
            console.log(error.data);
        };

        mediaVariables.addToProperty = function (props, propName, value) {
            mediaVariables[props][propName] = value;
        };

        return mediaVariables;
    });
