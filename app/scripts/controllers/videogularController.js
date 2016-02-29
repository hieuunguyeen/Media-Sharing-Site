angular.module('myApp')
	.controller('videogularController', function($sce, $scope) {
			$scope.config = {
				sources: [
					{src: $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/uploads/fm2z9skdybxw.mp4"), type: "video/mp4"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "bower_components/videogular-themes-default/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png",
					controls: {
						"autohide": true,
						"autohideTime": 3000
					}
				},
			};
		}
	);