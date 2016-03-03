angular.module('myApp')
    .controller('searchPageController', function ($scope, $window, $location, $route, mediaFactory) {

        $scope.searchResults = mediaFactory.searchData;
        $scope.searchImages = [], $scope.searchAudios = [];
        console.log($scope.searchResults);

        for (var key in $scope.searchResults) {
            if ($scope.searchResults[key].type === "audio") {
                $scope.searchAudios.push($scope.searchResults[key]);
            } else {
                $scope.searchImages.push($scope.searchResults[key]);
            }
        }
    });
