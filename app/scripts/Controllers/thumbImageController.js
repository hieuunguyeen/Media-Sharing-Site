angular.module('myApp')
    .controller('thumbImgController', function ($scope, $attrs, $rootScope, ajaxFactory, mediaFactory) {

        $scope.sendDataToModal = function (mediaId) {
            ajaxFactory.getFileById(mediaId).
                then(function (success) {
                    mediaFactory.setVariables('mediaData', success.data);
                    $rootScope.$broadcast('sendMedia');
                    console.log(success.data);
                }, function (error) {
                    mediaFactory.handleError(error);
                });
        }
    });
