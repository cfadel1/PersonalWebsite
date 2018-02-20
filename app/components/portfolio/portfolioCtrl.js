angular.module('myAppPortfolioCtrl', []).controller('PortfolioCtrl', ['$scope', 'portfolioContent', function ($scope, portfolioContent) {
    $scope.projects = portfolioContent.getProjects();
}]);
