angular.module('myApp')
    .controller('lightboxController', function ($scope, $rootScope, mediaFactory) {

        var lightbox = this;

        $scope.metadataTab = 1;

        $scope.selectTab = function (tab) {
            $scope.metadataTab = tab;
        };

        $scope.tabSelected = function (checkTab) {
            return $scope.metadataTab === checkTab;
        };

        $('.glyphicon-subtitles').click(function () {
            $('.image__description').toggleClass('show');
        });

        $scope.$on('sendMedia', function () {
            var media = mediaFactory.mediaData;
            console.log(media);
            lightbox.lightboxOn = true;
            $('body').addClass('body--overlay');

            $scope.imagePath = 'http://util.mw.metropolia.fi/uploads/' + media.path;
            $scope.imageDescription = media.description;
            $scope.imageTitle = media.title;
            $scope.imageUploadDate = media.uploadTime;
            $scope.imageAuthor = media.userId;
            $scope.imageType = media.mimeType.substr(6).toUpperCase();
            $scope.imageDirectLink = 'http://util.mw.metropolia.fi/uploads/' + media.path;
            $scope.imageHtmlLink = '<img src="http://util.mw.metropolia.fi/uploads/' + media.path + '">';
            $scope.imageViews = 'N/A';

            var image = new Image();
            image.src = $('.image__content').attr('src');
            console.log(image);

            $scope.imageWidth = image.width || 'N/A';
            $scope.imageHeight = image.height || 'N/A';
            $scope.imageSize = 'N/A';
            $scope.imageTakenDate = 'N/A';
            $scope.imageSize = 'N/A';
            $scope.imageDPI = 'N/A';
        });


        lightbox.close = function () {
            lightbox.lightboxOn = false;
            $('body').removeClass('body--overlay');
            console.log(lightbox.lightboxOn);
        };

    });
