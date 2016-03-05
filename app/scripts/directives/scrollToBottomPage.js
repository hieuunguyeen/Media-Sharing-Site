angular.module('myApp')
    .directive('scrollToBottomPage', function($parse) {
        return function($scope, element, attrs) {
            var handler = $parse(attrs.scrollToBottomPage);
            window.onscroll = function(evt) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
                    $scope.$apply(function() {
                        handler($scope);
                    });
                }
            };
        };
    });