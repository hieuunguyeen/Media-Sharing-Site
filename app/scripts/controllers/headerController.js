angular.module('myApp')
    .controller('headerController', function ($scope, $localStorage, mediaFactory, ajaxFactory) {


        $('#logo').click(function () {
        	if ($('#search-text').val().length > 0) {
	        	var searchFormTitle = {
	                'title': $scope.searchContent
	            };

	            var searchFormDesc = {
	            	'desc': $scope.searchContent
	            };


	            ajaxFactory.searchByTitle(searchFormTitle).then(function (success) {
	                // for (var key in success.data) {
	                //     if (success.data.hasOwnProperty(key)) {
	                //         console.log(success.data[key]);
	                //     }
	                // }
	                var searchTitleResults = success.data;
                    console.log(searchTitleResults);
	                ajaxFactory.searchByDescription(searchFormDesc).then(function (success) {
                        var searchDescResults = success.data;
                        console.log(searchDescResults);

		                // Array.prototype.push.apply(searchResults, success.data);
                        for (var i = searchTitleResults.length - 1; i >= 0; i -= 1) {
                            for (var j = searchDescResults.length - 1; j >= 0; j -= 1) {
                                if (searchTitleResults[i].fileId === searchDescResults[j].fileId) {
                                    searchDescResults.splice(j, 1);
                                }
                            }
                        }
                        Array.prototype.push.apply(searchTitleResults, searchDescResults);

		                console.log(searchTitleResults);
		            }, function (error) {
		                mediaFactory.handleError(error);
		            });
	            }, function (error) {
	                mediaFactory.handleError(error);
	            });
        	} else {
        		console.log('empty search field!');
        	}

        });
    });
