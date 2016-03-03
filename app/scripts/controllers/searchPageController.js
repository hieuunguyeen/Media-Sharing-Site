angular.module('myApp')
    .controller('searchPageController', function ($scope, $window, $location, $route, mediaFactory, ajaxFactory) {

        $scope.searchResults = mediaFactory.searchData;
        $scope.searchImages = [], $scope.searchAudios = [];

        console.log($scope.searchResults);

        // for (var key in $scope.searchResults) {
        //     ajaxFactory.getFileById($scope.searchResults[key].fileId)
        //         .then(function (success) {
        //             console.log(key);
        //             $scope.searchResults[key].uploadTime = success.data.uploadTime;
        //             console.log($scope.searchResults[key].uploadTime);
        //             console.log($scope.searchResults[key]);
        //         }, function (error) {
        //             console.log(error.data);
        //     });
        //
        //     //console.log($scope.searchResults);
        //
        //     ajaxFactory.getUserById($scope.searchResults[key].userId).then(function (success) {
        //         $scope.itemAuthor = success.data['username'];
        //     });
        // }

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
    });
