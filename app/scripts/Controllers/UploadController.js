// $scope
//
// var mimetype : media mime type
// var type : media real type
// function setMediaFile: get data from the uploaded media
// function postImage : send media to server

angular.module('myApp')
	.controller('uploadController', function ($scope, $http) {
		$scope.setMediaFile = function (element) {
			$scope.mimeType = element.files[0].type;
			$scope.type = element.files[0].type.split('/')[0];
		};

		$scope.postImage = function () {
			$scope.fd = new FormData(angular.element('#uploadForm')[0]); //change this to the upload form ID
			$scope.fd.append('user', 5); //change this user to the logged in user
			$scope.fd.append('title', 'title'); //read title from the form, or remove and add form input
			$scope.fd.append('description', 'description'); //read description from the form, or remove and add form input
			$scope.fd.append('type', $scope.type); //read type (image/audio/video) from the form, or remove and add form input
			$scope.fd.append('mime-type', $scope.mimeType); //For example video/mp4 or audio/mp3

			/* #EXAMPLE#
			<form if="uploadForm">
				<input name="file" type="file" onchange="angular.element(this).scope().setMediaFile(this)">
				<input name="title" type="text">
				<input name="description" type="text">
				<button ng-click="postImage();">Upload</button>
			</form>
			*/

			ajaxFactory.uploadFile($scope.fd);
			
			/* #Debugging#
			request.then(function (response) {
				console.log(response);
			}, function (err) {
				console.log(err);
			});*/
		};
	});
