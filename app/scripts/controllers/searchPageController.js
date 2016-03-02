angular.module('myApp')
    .controller('searchPageController', function ($scope, $window, $location, $route, mediaFactory) {

        $scope.searchResults = mediaFactory.searchData;
        console.log($scope.searchResults);
    });
