angular.module('myApp')
    .controller('searchPageController', function ($scope, $window, $location, $route, mediaFactory) {

        $scope.searchResults = mediaFactory.searchData;
        $scope.searchImages = [], $scope.searchAudios = [];

        for (var key in $scope.searchResults) {
            if ($scope.searchResults[key].type === "audio") {
                $scope.searchAudios.push($scope.searchResults[key]);
            } else {
                $scope.searchImages.push($scope.searchResults[key]);
            }
        }

        $scope.color = {
            'video': '#50d752',
            'image': '#0bcea0',
            'audio': '#efc445'
        };
    });
