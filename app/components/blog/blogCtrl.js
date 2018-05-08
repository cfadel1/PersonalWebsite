angular.module('myAppBlogCtrl', [])

    .controller('BlogCtrl', ['$scope', 'blogContent', function ($scope, blogContent) {

        $scope.gocnn = function () {
            window.location.replace("#/Cnn");
        }

        $scope.goethereum = function () {
            window.location.replace("#/Ethereum");
        }

        $scope.goethereum1 = function () {
            window.location.replace("#/Ethereum_Security_1");
        }
}]);
