angular.module('myAppFooterContDirective', []).directive('footerDir', [function () {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/footer-container/footer-container.html'
    };
}]);
