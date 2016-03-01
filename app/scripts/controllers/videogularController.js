angular.module('myApp')
    .controller('videogularController', function($sce, $scope) {

        $scope.API = null;

        $scope.onPlayerReady = function(API) {
            $scope.API = API;
        };

        $scope.config = {
            autoHide: false,
            autoHideTime: 3000,
            autoPlay: false,
            sources: null,
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                // poster: "http://www.videogular.com/assets/images/videogular.png",
                controls: {
                    "autohide": true,
                    "autohideTime": 3000
                }
            }
        };

        $scope.setVideo = function(src, type, thumbnail) {
            $scope.config.sources = [
                { src: $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/uploads/" + src), type: type }
            ];
            // $scope.config.plugins.poster = "http://util.mw.metropolia.fi/uploads/" + thumbnail;
        };
    });
