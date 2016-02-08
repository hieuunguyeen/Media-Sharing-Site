angular.module('myApp')
    .controller('lightboxController', function ($scope,$rootScope) {
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

        $scope.$on('xxx', function () {
            console.log($rootScope.imgData);
            $('body').addClass('body--overlay');
        });

    });