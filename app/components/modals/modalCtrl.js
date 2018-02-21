angular.module('myApp')
    .controller('modalCtrl', function ($timeout, $scope, $rootScope, $window, $location, modalService) {
        var vm = this;
        vm.openModal = openModal;
        vm.closeModal = closeModal;

        initController();

        function initController() {}

        function openModal() {
            var id = event.currentTarget.id;
            modalService.Open(id);
        }

        function closeModal() {
            var id = event.currentTarget.id;
            modalService.Close(id);
        }
    });
