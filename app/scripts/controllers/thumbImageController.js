angular.module('myApp')
    .controller('thumbImgController', function ($scope, $rootScope, $location, $route, ajaxFactory, mediaFactory) {

        $scope.sendDataToModal = function (mediaId) {
            ajaxFactory.getFileById(mediaId).
                then(function (success) {
                    mediaFactory.setVariables('mediaData', success.data);
                    mediaFactory.addToProperty('mediaData', 'itemId', mediaId);
                    // $rootScope.$broadcast('sendToModal');
                    $location.path('/singleItem/:' + mediaId);
                    $route.reload();
                }, function (error) {
                    mediaFactory.handleError(error);
                });
        }


    });
