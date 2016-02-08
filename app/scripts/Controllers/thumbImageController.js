angular.module('myApp')
<<<<<<< HEAD
    .controller('thumbImgController', function ($scope, ajaxFactory, $attrs, $rootScope) {

        $scope.getImageModal = function (imgId) {
            console.log(imgId);
            ajaxFactory.getFileById(imgId).
                then(function (success) {
                    $rootScope.imgData = success.data;
                    $rootScope.$broadcast('xxx');
                }, function (error) {
                    console.log(error.data);
                });
        };

=======
    .controller('thumbImgController', function ($scope, $attrs, $rootScope, ajaxFactory, mediaFactory) {

        $scope.sendDataToModal = function (mediaId) {
            ajaxFactory.getFileById(mediaId).
                then(function (success) {
                    mediaFactory.setVariables('mediaData', success.data);
                    $rootScope.$broadcast('sendMedia');
                }, function (error) {
                    mediaFactory.handleError(error);
                });
        }
>>>>>>> 4d8ea8b9147481d6a5524bc360527af6254c4f82
    });
