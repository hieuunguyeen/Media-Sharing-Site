angular.module('myApp')
    .factory('ajaxFactory', function ($http) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var ajaxFunctions = {};

        ajaxFunctions.uploadFile = function (args) {
            return $http.post(urlBase + 'upload', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };

        ajaxFunctions.getFiles = function(args) {
            return $http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/' + args);
        };

        return ajaxFunctions;
    });