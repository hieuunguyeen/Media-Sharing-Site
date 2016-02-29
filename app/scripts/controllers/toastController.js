angular.module('myApp')
    .controller('ToastController', ToastController );
    
    function ToastController($timeout) {
        var vm = this;
        vm.show = false;
        
        vm.showToast = function () {
            vm.show = !vm.show;
            $timeout(function() {
                vm.show = false;
            }, 1500);
        }
    };
    
    ToastController.$inject = ['$timeout'];