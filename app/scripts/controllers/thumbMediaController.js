angular.module('myApp')
    .controller('thumbMediaController', function($scope, $rootScope, $location, $route, $sce, ajaxFactory, mediaFactory) {

        $scope.sendDataToModal = function(mediaId) {
            ajaxFactory.getFileById(mediaId).
            then(function(success) {
                mediaFactory.setVariables('mediaData', success.data);
                mediaFactory.addToProperty('mediaData', 'itemId', mediaId);
                $location.path('/singleItem/:' + mediaId);
                $route.reload();
            }, function(error) {
                mediaFactory.handleError(error);
            });
        }


        $scope.API = null;

        $scope.onPlayerReady = function(API) {
            $scope.API = API
        };

        $scope.config = {
            autoHide: true,
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

        $scope.setVideo = function(src, type, title) {
            $scope.config.sources = [
                { src: $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/uploads/" + src), type: type }
            ];
            $scope.title - title;
            // $scope.config.plugins.poster = "http://util.mw.metropolia.fi/uploads/" + thumbnail;
        };


    });
