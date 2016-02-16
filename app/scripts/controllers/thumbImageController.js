angular.module('myApp')
    .controller('thumbImgController', function ($scope, $rootScope, ajaxFactory, mediaFactory) {

        $scope.sendDataToModal = function (mediaId) {
            ajaxFactory.getFileById(mediaId).
                then(function (success) {
                    mediaFactory.setVariables('mediaData', success.data);
                    mediaFactory.addToProperty('mediaData', 'itemId', mediaId);
                    $rootScope.$broadcast('sendToModal');
                }, function (error) {
                    mediaFactory.handleError(error);
                });
        }
    });
