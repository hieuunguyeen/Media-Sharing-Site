angular.module('myApp')
    .controller('singleItemController', function ($scope, $routeParams, $localStorage, $location, $route, mediaFactory, ajaxFactory) {

        $scope.itemId = parseInt($routeParams.itemId.substring(1));
        $scope.itemComments;
        $scope.liked = false;

        // load data to page
        ajaxFactory.getFileById($scope.itemId).
            then(function (success) {
                mediaFactory.setVariables('mediaData', success.data);
                mediaFactory.addToProperty('mediaData', 'itemId', $scope.itemId);
                var media = mediaFactory.mediaData;

                $scope.imagePath = 'http://util.mw.metropolia.fi/uploads/' + media.path;

                $scope.imageDirectLink = 'http://util.mw.metropolia.fi/uploads/' + media.path;
                $scope.imageItemLink = 'http://localhost:9000/#/singleItem/:' + $scope.itemId;
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

        // load comments to page
        ajaxFactory.getItemComments($scope.itemId)
            .then(function (success) {
                $scope.itemComments = success.data;
            }, function (error) {
                mediaFactory.handleError(error);
            });

        ajaxFactory.listLikedByUser($localStorage.userId)
            .then(function (success) {
                var itemsLiked = success.data;
                for (var item in itemsLiked) {
                    console.log('fileid liked: ' + itemsLiked[item].fileId);
                    if ($scope.itemId === itemsLiked[item].fileId) {
                        $scope.liked = true;
                    }
                }
            }, function (error) {
                console.log(error.data);
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
                    $location.url($location.path());
                    $route.reload();
                }, function (error) {
                    console.log(error.data);
                });
        };

        $scope.likeItem = function () {
            if ($scope.liked) {
                ajaxFactory.unlikeItem($scope.itemId, $localStorage.userId)
                    .then(function (success) {
                        console.log(success.data);
                        $location.url($location.path());
                        $route.reload();
                    }, function (error) {
                        mediaFactory.handleError(error);
                    });
            } else {
                ajaxFactory.likeItem($scope.itemId, $localStorage.userId)
                    .then(function (success) {
                        console.log(success.data);
                        $location.url($location.path());
                        $route.reload();
                    }, function (error) {
                        mediaFactory.handleError(error);
                    });
            }
        };

    });
