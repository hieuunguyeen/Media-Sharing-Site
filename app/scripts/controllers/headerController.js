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
	                var searchResults = success.data;
	                ajaxFactory.searchByDescription(searchFormDesc).then(function (success) {
		                Array.prototype.push.apply(searchResults, success.data);

		                console.log(searchResults);
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