angular.module('myApp', [])
	.controller('UploadController', function ($scope, $http) {

		$scope.postImage = function () {
			$scope.fd = new FormData(angular.element('#formi')[0]); //change this to the upload form ID
			$scope.fd.append('user', 5); //change this user to the logged in user
			$scope.fd.append('title', 'title'); //read title from the form
			$scope.fd.append('description', 'description'); //read description from the form
			$scope.fd.append('type', 'type'); //read type (image/audio/video) from the form

			$http.post('http://util.mw.metropolia.fi/ImageRekt/api/v2/upload',
				$scope.fd, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': undefined
					}
				});
		};
	});