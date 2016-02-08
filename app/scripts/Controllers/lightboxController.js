angular.module('myApp')
    .controller('lightboxController', function ($scope, $rootScope, mediaFactory) {
        var lightbox = this;

        lightbox.metadataTab = 1;

        lightbox.selectTab = function (tab) {
            lightbox.metadataTab = tab;
        };

        lightbox.tabSelected = function (checkTab) {
            return lightbox.metadataTab === checkTab;
        };

        $('.glyphicon-subtitles').click(function () {
            $('.image__description').toggleClass('show');
        });

        $scope.$on('sendMedia', function () {
            var media = mediaFactory.mediaData;
            console.log(media);
            lightbox.lightboxOn = true;
            $('body').addClass('body--overlay');
            $('.overlay').addClass('overlay--cover');
            $('.image__content').attr('src', 'http://util.mw.metropolia.fi/uploads/' + media.path);
        });

        lightbox.close = function () {
            lightbox.lightboxOn = false;
            $('body').removeClass('body--overlay');
            $('.overlay').removeClass('overlay--cover');
        };

    });
