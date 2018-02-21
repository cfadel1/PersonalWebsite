angular.module('myApp')
    .factory('modalService', ['$http', '$q', function ($http, $q) {
        var modals = [];

        var service = {
            Add: Add,
            Open: Open,
            Close: Close
        }

        function Add(modal) {
            modals.push(modal);
        }
        
        function Open(id) {
            var modal = FindWhere(id);
            modal.open();
        }

        function Close(id) {
            var modal = FindWhere(id);
            modal.close();
        }

        function FindWhere(id) {
            var arrayLength = modals.length;
            for (var i = 0; i < arrayLength; i++) {
                if (modals[i].id === id) {
                    return modals[i];
                }
            }
        }

        function Without(modals, modalToRemove) {
            modals.filter(function (value) {
                return value !== 2;
            });
        }

        return service;
   }]);
