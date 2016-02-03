angular.module('myApp')
    .controller('lightboxController', function () {
        var lightbox = this;

        lightbox.metadataTab = 1;

        lightbox.selectTab = function (tab) {
            lightbox.metadataTab = tab;
        };

        lightbox.tabSelected = function(checkTab) {
            return lightbox.metadataTab === checkTab;
        };

        $('.glyphicon-subtitles').click(function () {
            $('.image__description').toggleClass('show');
        });
    });
