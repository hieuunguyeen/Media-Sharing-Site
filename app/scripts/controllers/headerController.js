angular.module('myApp')
    .controller('headerController', function ($scope, $route, $location, $window, $localStorage, mediaFactory, ajaxFactory) {

        $scope.typeSearch = 'title';
        $scope.typeMedia = ['fa-file-image-o', 'fa-file-audio-o', 'fa-file-video-o', 'fa-files-o'];
        $scope.currentType = 3;

        $('.search-options .fa').not('.search-type').click(function () {
            $(this).siblings().not('.search-type').removeClass('selected');
            $(this).addClass('selected');
        });

        $scope.changeMedia = function () {
            $scope.currentType += 1;
            if ($scope.currentType >= $scope.typeMedia.length) {
                $scope.currentType = 0;
            }
            console.log($scope.colors[$scope.currentType]);
        }

        $scope.colors = {
            0 : '#50d752',
            1 : '#efc445',
            2 : '#0bcea0',
            3 : '#de3b59'
        };

        $scope.changeType = function(type) {
            $scope.typeSearch = type;
        };

        $scope.doSearch = function (type) {
            console.log(type);
            if (type === 'title') {
                searchTitle();
            }
            if (type === 'user') {
                searchUser();
            }
        };

        var searchTitle = function () {
            if ($scope.searchContent.length > 0) {
	        	var searchFormTitle = {
	                'title': $scope.searchContent
	            };

	            var searchFormDesc = {
	            	'desc': $scope.searchContent
	            };

                // search by title
	            ajaxFactory.searchByTitle(searchFormTitle).then(function (success) {
                    var searchTitleResults = success.data;
                    // do another search by description
	                ajaxFactory.searchByDescription(searchFormDesc).then(function (success) {
                        var searchDescResults = success.data;
                        // check 2 arrays for duplicated properties
                        for (var i = searchTitleResults.length - 1; i >= 0; i -= 1) {
                            for (var j = searchDescResults.length - 1; j >= 0; j -= 1) {
                                if (searchTitleResults[i].fileId === searchDescResults[j].fileId) {
                                    searchDescResults.splice(j, 1);
                                }
                            }
                        }

                        // merge 2 arrays into searchTitleResults (weird)
                        Array.prototype.push.apply(searchTitleResults, searchDescResults);
                        mediaFactory.setVariables('searchData', searchTitleResults);
                        console.log(searchTitleResults);

                        // switch to the search results page
                        $location.path('/search-page');
                        $route.reload();
		            }, function (error) {
		                mediaFactory.handleError(error);
		            });
	            }, function (error) {
	                mediaFactory.handleError(error);
	            });
        	} else {
        		console.log('empty search field!');
        	}
        };

        var searchUser = function () {
            var searchUsername = $scope.searchContent;
            ajaxFactory.getUsers()
                .then(function (success) {
                    for (var key in success.data) {
                        if (success.data[key].username === searchUsername) {
                            console.log(searchUsername + ' found!');
                            var searchUserId = success.data[key].userId;
                            ajaxFactory.getFilesByUserId(searchUserId)
                                .then(function (success) {
                                    console.log(success.data);
                                    success.data.forEach(function (file) {
                                        file.userId = searchUserId;
                                    });
                                    mediaFactory.setVariables('searchData', success.data);
                                    console.log(mediaFactory.searchData);
                                    $location.path('/search-page');
                                    $route.reload();
                                }, function (error) {
                                    mediaFactory.handleError(error);
                                });
                        }
                    }

                }, function (error) {
                    mediaFactory.handleError(error);
            });

        };
    });
