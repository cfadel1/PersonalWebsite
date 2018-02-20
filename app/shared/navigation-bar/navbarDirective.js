angular.module('myAppNavbarDirective', []).directive('navDir', [function () {
    return {
        restrict: 'E',
        scope: '=menuItems',
        controller: function ($scope, navbarFactory) {
            $scope.menuItems = navbarFactory.getNavbarHeadings()
        },
        templateUrl: 'app/shared/navigation-bar/navigation-bar.html'
    };
}]);
