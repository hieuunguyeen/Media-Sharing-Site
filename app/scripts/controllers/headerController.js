angular.module('myApp')
    .controller('headerController', function ($scope, $route, $location, $window, $localStorage, mediaFactory, ajaxFactory) {

        $scope.search = function () {
            if ($('#search-text').val().length > 0) {
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

                        // switch to the search results page
                        $location.path('/search-page');
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
    });
