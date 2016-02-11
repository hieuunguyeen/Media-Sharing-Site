angular.module('myApp')
    .controller('singleItemController', function ($scope, mediaFactory, ajaxFactory) {
        $scope.itemTitle = 'Item XYZ';
        $scope.itemloadDate = '11/12/13';
        $scope.itemViews = '1223';
        $scope.itemAuthor = 'Author XYZ';
        $scope.itemDescription = 'wertyuiopasdfghjkzxcvbulhfsreuilfdhjdjkvh,dvjkredkvjdkgjfkdnvjekfdnvjefkdhvnfkhnnm';
    });
