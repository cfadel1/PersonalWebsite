angular.module('myAppFooterContDirective', []).directive('footerDir', [function () {
    return {
        restrict: 'E',
        //        scope: '=menuItems',
        //        controller: function ($scope, navbarFactory) {
        //            $scope.menuItems = navbarFactory.getNavbarHeadings()
        //        },
        templateUrl: 'app/shared/footer-container/footer-container.html'
    };
}]);
