angular.module('myApp')
    .factory('ajaxFactory', function ($http, $httpParamSerializer) {
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

        ajaxFunctions.getFileById = function(fileId) {
            return $http.get(urlBase + 'file/' + fileId);
        }

        ajaxFunctions.userLogin = function (userData) {
            return $http.post(urlBase + 'login', $httpParamSerializer(userData), {
                headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        }

        return ajaxFunctions;
    });
