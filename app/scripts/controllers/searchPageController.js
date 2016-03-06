angular.module('myApp')
    .controller('searchPageController', function ($scope, $window, $location, $route, mediaFactory, ajaxFactory) {

        $scope.searchResults = mediaFactory.searchData;

        $scope.searchResults.forEach(function (file) {
            ajaxFactory.getFileById(file.fileId).then(function (success) {
                file.uploadTime = success.data.uploadTime;

            }, function (error) {
                console.log(error.data);
            });

            ajaxFactory.getUserById(file.userId).then(function (success) {
                file.username = success.data.username;
            }, function (error) {
                console.log(error.data);
            });
        });

        $scope.color = {
            'video': '#50d752',
            'image': '#0bcea0',
            'audio': '#efc445'
        };

        var tempSearchResults = mediaFactory.searchData;
        $scope.finalResults = [];

        $scope.displayType = $('#desktop-header .search-type').attr('class');
        $scope.displayTypePhone = $('#phone-header .search-type').attr('class');
        console.log($scope.displayType);

        $scope.filterSearch = function (type) {
            if (screen.width < 600) {
                if (!$scope.displayTypePhone.includes('files-o')) {
                    $scope.searchResults.forEach(function (file) {
                        if ($scope.displayTypePhone.includes(file.type)) {
                            $scope.finalResults.push(file);
                        }
                    });
                } else {
                    $scope.finalResults = $scope.searchResults;
                }
                if ($scope.finalResults.length < 1) {
                    $('.search-container').text('Cannot find any results from the search key');
                    console.log('no search result');
                }
            } else {
                if (!$scope.displayType.includes('files-o')) {
                    $scope.searchResults.forEach(function (file) {
                        if ($scope.displayType.includes(file.type)) {
                            $scope.finalResults.push(file);
                        }
                    });
                    console.log($scope.searchResults);
                } else {
                    $scope.finalResults = $scope.searchResults;
                }
                if ($scope.finalResults.length < 1) {
                    $('.search-container').text('Cannot find any results from the search key');
                    console.log('no search result');
                }
            }
        };

        $scope.searchImages = [], $scope.searchAudios = [];

        console.log($scope.searchResults);
    });