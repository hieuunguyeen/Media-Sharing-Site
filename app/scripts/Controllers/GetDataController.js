angular.module('myApp', [])
	.controller('GetDataController', function ($scope, $http, $sce) {
		$scope.getImages = function () {
			$http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/image').then($scope.imageSuccess, $scope.imageError);
		};
		$scope.imageSuccess = function (result) {
			$scope.allImages = result.data;
			console.log(result);
		};
		$scope.imageError = function (result) {
			console.log(result);
		};
		$scope.getVideo = function () {
			$http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/video').then($scope.videoSuccess, $scope.videoError);
		};
		$scope.videoSuccess = function (result) {
			$scope.allVideo = result.data;

			console.log(result);
		};
		$scope.videoError = function (result) {
			console.log(result);
		};
		$scope.getAudio = function () {
			$http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/files/type/audio').then($scope.audioSuccess, $scope.audioError);
		};
		$scope.audioSuccess = function (result) {
			$scope.allAudio = result.data;
			console.log(result);
		};
		$scope.audioError = function (result) {
			console.log(result);
		};
	
		//Load all content
		$scope.runAll = function() {
			$scope.getImages();
			$scope.getVideo();
			$scope.getAudio();
			
		};

		//transform to trusted link for videos and audio
		//Usa like this:
		//<source ng-src="{{trustURL('http://util.mw.metropolia.fi/uploads/' + video.path)}}">
		$scope.trustURL = function (videoUrl) {
			return $sce.trustAsResourceUrl(videoUrl);
		};
	});