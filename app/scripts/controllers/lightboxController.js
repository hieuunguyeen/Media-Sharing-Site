angular.module('myApp')
    .controller('lightboxController', function ($scope, $rootScope, $window, $location, $route, mediaFactory) {

        var lightbox = this;

        $scope.metadataTab = 1;
        $scope.imageWidth, $scope.imageHeight, $scope.imageSize, $scope.imageTakenDate, $scope.imageSize, $scope.imageDPI;

        $scope.selectTab = function (tab) {
            $scope.metadataTab = tab;
        };

        $scope.tabSelected = function (checkTab) {
            return $scope.metadataTab === checkTab;
        };

        $('.glyphicon-subtitles').click(function () {
            $('.image__description').toggleClass('show');
        });

        $scope.redirectComment = function () {
            console.log('redirecting');
            $location.url('/singleItem');
            $route.reload();
            $('body').removeClass('body--overlay');
            lightbox.lightboxOn = false;
        };

        $scope.$on('sendMedia', function () {
            var media = mediaFactory.mediaData;
            console.log(media);

            $scope.imagePath = 'http://util.mw.metropolia.fi/uploads/' + media.path;
            var image = new Image();
            console.log(image);
            image.onload = function () {
                $scope.imageWidth = image.width;
                $scope.imageHeight = image.height;
                console.log($scope.imageWidth);
                console.log($scope.imageHeight);
                lightbox.lightboxOn = true;
                $scope.$apply();

            };
            image.src = $scope.imagePath;

            $scope.imageDescription = media.description;
            $scope.imageTitle = media.title;
            $scope.imageUploadDate = media.uploadTime;
            $scope.imageAuthor = media.userId;
            $scope.imageType = media.mimeType.substr(6).toUpperCase();
            $scope.imageDirectLink = 'http://util.mw.metropolia.fi/uploads/' + media.path;
            $scope.imageHtmlLink = '<img src="http://util.mw.metropolia.fi/uploads/' + media.path + '">';
            $scope.imageViews = 'N/A';

            // lightbox.lightboxOn = true;
            $('body').addClass('body--overlay');
        });


        lightbox.close = function () {
            lightbox.lightboxOn = false;
            $('body').removeClass('body--overlay');
        };

    });
