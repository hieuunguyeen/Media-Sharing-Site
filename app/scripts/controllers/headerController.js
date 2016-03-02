angular.module('myApp')
    .controller('headerController', function ($scope, $localStorage, mediaFactory, ajaxFactory) {
        

        $('#logo').click(function () {
            var searchForm = {
                'title': $scope.searchContent
            };


            ajaxFactory.searchByTitle(searchForm).then(function (success) {
                // for (var key in success.data) {
                //     if (success.data.hasOwnProperty(key)) {
                //         console.log(success.data[key]);
                //     }
                // }
                mediaFactory.setVariables('searchData', success.data);
                console.log(mediaFactory.searchData);
            }, function (error) {
                console.log(error.data);
            });
        });
    });