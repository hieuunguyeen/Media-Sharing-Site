angular.module('myApp')
    .controller('singleItemController', function ($location, $scope, $routeParams, $rootScope, mediaFactory, ajaxFactory) {
        // var media = mediaFactory.mediaData; // same data from modal
        $scope.itemId = parseInt($routeParams.itemId.substring(1));
        console.log($scope.itemId);

        ajaxFactory.getFileById($scope.itemId).
            then(function (success) {
                mediaFactory.setVariables('mediaData', success.data);
                mediaFactory.addToProperty('mediaData', 'itemId', $scope.itemId);
                var media = mediaFactory.mediaData;

                $scope.imagePath = 'http://util.mw.metropolia.fi/uploads/' + media.path;
                $scope.itemTitle = media.title;
                $scope.itemloadDate = media.uploadTime;
                $scope.itemViews = '1223';
                $scope.itemAuthor = media.userId;
                $scope.itemDescription = media.description;
                $scope.itemType = media.mimeType.substring(6);

                var image = new Image();
                console.log(image);
                image.onload = function () {
                    $scope.imageWidth = image.width;
                    $scope.imageHeight = image.height;
                    console.log($scope.imageWidth);
                    console.log($scope.imageHeight);
                    $scope.$apply();
                };

                image.src = $scope.imagePath;
            }, function (error) {
                mediaFactory.handleError(error);
        });
    });
