angular.module('myApp')
    .controller('thumbImgController', function ($scope, $rootScope, ajaxFactory, mediaFactory) {

        $scope.sendDataToModal = function (mediaId) {
            ajaxFactory.getFileById(mediaId).
                then(function (success) {
                    mediaFactory.setVariables('mediaData', success.data);
                    $rootScope.$broadcast('sendMedia');
                }, function (error) {
                    mediaFactory.handleError(error);
                });
        }
    });
