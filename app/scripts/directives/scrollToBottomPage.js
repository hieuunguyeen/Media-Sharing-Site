angular.module('myApp')
	.directive('scrollToBottomPage', function($parse) {
		return function($scope, element, attrs) {
			var handler = $parse(attrs.scrollToBottomPage);
			window.onscroll = function(evt) {
				var scrollTop = element[0].scrollTop;
				var scrollHeight = element[0].scrollHeight;
				var offsetHeight = element[0].offsetHeight;
				if (scrollTop === (scrollHeight - offsetHeight)) {
					$scope.$apply(function() {
						handler($scope);
					});
				}
			};
		};
	});