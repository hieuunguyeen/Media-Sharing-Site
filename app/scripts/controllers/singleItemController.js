angular.module('myApp')
    .controller('singleItemController', function ($scope, $routeParams, $localStorage, mediaFactory, ajaxFactory) {

        $scope.itemId = parseInt($routeParams.itemId.substring(1));

        ajaxFactory.getFileById($scope.itemId).
            then(function (success) {
                mediaFactory.setVariables('mediaData', success.data);
                mediaFactory.addToProperty('mediaData', 'itemId', $scope.itemId);
                var media = mediaFactory.mediaData;

                $scope.imagePath = 'http://util.mw.metropolia.fi/uploads/' + media.path;

                $scope.imageDirectLink = 'http://util.mw.metropolia.fi/uploads/' + media.path;
                $scope.imageHtmlLink = '<img src="http://util.mw.metropolia.fi/uploads/' + media.path + '">';
                $scope.itemTitle = media.title;
                $scope.itemloadDate = media.uploadTime;
                $scope.itemViews = '1223';
                $scope.itemAuthor = media.userId;
                $scope.itemDescription = media.description;
                $scope.itemType = media.mimeType.substring(6).toUpperCase();

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

        $scope.postComment = function () {
            var commentData = {
                'user': $localStorage.userId,
                'comment': $scope.comment
            };

            console.log(commentData);

            ajaxFactory.postComment(commentData, $scope.itemId)
                .then(function (success) {
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });
        };
    });
