angular.module('myApp')
    .controller('lightboxController', function () {
        var lightbox = this;

        lightbox.metadataTab = 1;
        lightbox.imgInfo();

        lightbox.selectTab = function (tab) {
            lightbox.metadataTab = tab;
        };

        lightbox.tabSelected = function (checkTab) {
            return lightbox.metadataTab === checkTab;
        };

        $('.glyphicon-subtitles').click(function () {
            $('.image__description').toggleClass('show');
        });

        var imgData = {};

        lightbox.imgInfo = function () {
            $('.image-content').attr('src', 'http://util.mw.metropolia.fi/upload' + imgData.path);
            $('.image-info__name').text(imgData.title);
            $('.image-info__upload-date').text(imgData.uploadTime);
            $('.image-info__author').text(imgData.userId);
            $('.image__description').find('p').text(imgData.description);
        }
    });
