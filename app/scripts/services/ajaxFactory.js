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
            return $http.get(urlBase + 'files/type/' + args);
        };

        ajaxFunctions.getFilesByUserId = function(args) {
            return $http.get(urlBase + 'files/user/' + args);
        };

        ajaxFunctions.postRegisterForm = function(form) {
            return $http({
                method: 'POST',
                url: urlBase + 'register',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data: $httpParamSerializer(form)
            });
        };

        ajaxFunctions.getFileById = function(fileId) {
            return $http.get(urlBase + 'file/' + fileId);
        };

        ajaxFunctions.userLogin = function (userData) {
            return $http.post(urlBase + 'login', $httpParamSerializer(userData), {
                headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        ajaxFunctions.userAlreadyExists = function(user) {
            return $http.post(urlBase + 'user/exists', $httpParamSerializer(user), {
                headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        ajaxFunctions.postComment = function(form, fileId) {
            return $http({
                method: 'POST',
                url: urlBase + 'comment/file/' + fileId,
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data: $httpParamSerializer(form)
            });
        };

        return ajaxFunctions;
    });
