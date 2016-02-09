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

            var imgWidth, imgHeight, imgTaken, imgSize, imgBitDepth, imgAll;

            $('.image__content').attr('src', 'http://util.mw.metropolia.fi/uploads/' + media.path);
            $('.image__description p').text(media.description);
            $('.image-info__name').text(media.title);
            $('.image-info__upload-date').text(media.uploadTime);
            $('.image-info__author').text(media.userId);
            $('.image-type').text(media.mimeType.substr(6).toUpperCase());
            $('.link.direct-link').val('http://util.mw.metropolia.fi/uploads/' + media.path);
            $('.link.html-link').val('<img src="http://util.mw.metropolia.fi/uploads/' + media.path + '">');

            var image = new Image();
            image.src = $('.image__content').attr('src');
            EXIF.getData(image, function () {
                    imgWidth = image.width || 'N/A',
                    imgHeight = image.height || 'N/A',
                    imgTaken = EXIF.getTag(image, "DateTime") || 'N/A';
                    imgAll = EXIF.getAllTags(image) || 'N/A';
                console.log(imgAll);
                $('.resolution').text(imgWidth + ' x ' + imgHeight);
                $('.taken-date').text(imgTaken);
                // if (media.mimeType.substr(6).toUpperCase() === "JPEG") {
                //     imgBitDepth = 24;
                // } else if (media.mimeType.substr(6).toUpperCase() === "PNG") {
                //     imgBitDepth = 32;
                // }
                // imgSize = imgBitDepth * imgWidth * imgHeight / 8 / 1024;
                // $('.size').text(imgSize + ' KB');
            });
        });


        lightbox.close = function () {
            lightbox.lightboxOn = false;
            $('body').removeClass('body--overlay');
            $('.overlay').removeClass('overlay--cover');
        };

    });
