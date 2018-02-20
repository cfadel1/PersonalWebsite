angular.module('myAppHeaderContDirective', []).directive('headerDir', [function () {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/header-container/header-container.html'
    };
}]);
