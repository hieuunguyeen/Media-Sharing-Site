angular.module('myApp')
    .directive('scrollToBottomPage', function($parse) {
        return function($scope, element, attrs) {
            var handler = $parse(attrs.scrollToBottomPage);
            window.onscroll = function(evt) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    $scope.$apply(function() {
                        handler($scope);
                    });
                }
            };
        };
    });