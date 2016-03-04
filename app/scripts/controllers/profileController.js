angular.module('myApp')
    .controller('profileController', function ($scope, ajaxFactory, $localStorage) {
        //Fill in profile with information
        ajaxFactory.listLikedByUser($localStorage.userId)
            .then(function (success) {
                $scope.likesSum = success.data.length;
            }, function (err) {
                console.log(err);
            });
        ajaxFactory.getFilesByUserId($localStorage.userId)
            .then(function (success) {
                var images = [];
                var videos = [];
                var audios = [];
                
                for (var key in success.data) {
                    if (success.data[key].type == 'image') {
                        images.push(success.data[key]);
                    } else if (success.data[key].type == 'audio') {
                        audios.push(success.data[key]);
                    } else {
                        videos.push(success.data[key]);
                    }
                }
                $scope.imagesSum = images.length;
                $scope.videosSum = videos.length;
                $scope.audiosSum = audios.length;
            }, function (error) {
                console.log(error.data);
            });
    });