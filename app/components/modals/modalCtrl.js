angular.module('myApp')
    .controller('modalCtrl', function ($timeout, $scope, $rootScope, $window, $location, modalService) {
        var vm = this;
        vm.openModal = openModal;
        vm.closeModal = closeModal;

        initController();

        function initController() {}

        function openModal(id) {
            modalService.Open(id);
        }

        function closeModal(id) {
            modalService.Close(id);
        }
    });
