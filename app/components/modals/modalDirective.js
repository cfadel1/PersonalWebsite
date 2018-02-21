angular.module('myApp')
    .directive('modal', function (modalService, $document) {
        return {
            restrict: "E",
            controller: "modalCtrl",
            controllerAs: "vm",
            link: function (scope, element, attrs) {
                if (!attrs.id) {
                    console.error('modal must have an id');
                    return;
                }

                // move element to bottom of page (just before </body>) so it can be displayed above everything else
                element.appendTo('body');

                // close modal on background click
                element.on('click', function (e) {
                    var target = $(e.target);
                    if (!target.closest('.modal-body').length) {
                        scope.$evalAsync(Close);
                    }
                });

                // add self (this modal instance) to the modal service so it's accessible from controllers
                var modal = {
                    id: attrs.id,
                    open: Open,
                    close: Close
                };
                modalService.Add(modal);

                // remove self from modal service when directive is destroyed
                scope.$on('$destroy', function () {
                    $('modal').remove();
                });

                // open modal
                function Open() {
                    element.show();
                    $('body').addClass('modal-open');
                }

                // close modal
                function Close() {
                    element.hide();
                    $('body').removeClass('modal-open');
                }

                $document.keyup(function (e) {
                    if (e.keyCode == 27) {
                        var target = $(e.target);
                        if (!target.closest('.modal-body').length) {
                            scope.$evalAsync(Close);
                        }
                    }
                });
            }
        };
    });
