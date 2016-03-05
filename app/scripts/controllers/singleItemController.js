angular.module('myApp')
    .controller('singleItemController', function ($sce, $scope, $rootScope, $routeParams, $localStorage, $location, $route, mediaFactory, ajaxFactory, $compile) {

        var clipboard = new Clipboard('.copy');

        // control the data tab on phone
        $scope.metadataTab = 1;
        $scope.selectTab = function (tab) {
            $scope.metadataTab = tab;
        };

        $scope.tabSelected = function (checkTab) {
            return $scope.metadataTab === checkTab;
        };

        $scope.itemId = parseInt($routeParams.itemId);
        $scope.itemComments;
        $scope.liked = false;

        // load data to page
        ajaxFactory.getFileById($scope.itemId).
            then(function (success) {
                mediaFactory.setVariables('mediaData', success.data);
                mediaFactory.addToProperty('mediaData', 'itemId', $scope.itemId);
                var media = mediaFactory.mediaData;
                $scope.media = mediaFactory.mediaData;

                // this should be mediaPath but I messed up, keep it this way for now
                $scope.mediaPath = 'http://util.mw.metropolia.fi/uploads/' + media.path;
                $scope.path = media.path;
                $scope.mimeType = media.mimeType;
                $scope.title = media.title;
$
                if (media.type === "image") {
                    $('.content__image').html('<img src="' + $scope.mediaPath + '" alt="some alt">');

                    // getting resolution of image
                    var image = new Image();

                    image.onload = function () {
                        $scope.imageWidth = image.width;
                        $scope.imageHeight = image.height;
                        console.log($scope.imageWidth);
                        console.log($scope.imageHeight);
                        $scope.$apply();
                    };

                    image.src = $scope.mediaPath;
                } else if (media.type === "video") {
                    var a = '<div class="videogular-container" ng-controller="thumbMediaController"  ng-init = "setVideo(path , mimeType, title)"><thumbnail-video></thumbnail-video></div>';
                    $('.content__image').html($compile(a)($scope));

                    $('.single-item__resolution').closest('h5').hide();
                } else if (media.type === "audio") {
                    var b = '<div class="thumbnail__audio-vertical" ng-controller="thumbMediaController" ng-init ="setAudioPath(path, title)"><thumbnail-audio ></thumbnail-audio></div>'
                    $('.content__image').html($compile(b)($scope));
                    $('.info__general-data h3').eq(3).hide();
                }

                $scope.imageDirectLink = 'http://util.mw.metropolia.fi/uploads/' + media.path;
                $scope.imageItemLink = 'http://users.metropolia.fi/~duyn/Media%20Sharing%20Site/#/singleItem/' + $scope.itemId;
                $scope.imageHtmlLink = '<img src="http://util.mw.metropolia.fi/uploads/' + media.path + '">';
                $scope.itemTitle = media.title;
                $scope.itemloadDate = media.uploadTime;
                $scope.itemViews = '1223';

                ajaxFactory.getUserById(media.userId).then(function (success) {
                    $scope.itemAuthor = success.data['username'];
                });
                $scope.itemDescription = media.description;
                $scope.itemType = media.mimeType.substring(6).toUpperCase();


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

        $scope.trustURL = function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    });
