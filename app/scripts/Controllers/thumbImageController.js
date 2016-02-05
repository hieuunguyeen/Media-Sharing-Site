angular.module('myApp')
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

    });
