angular.module('myAppBlogCtrl', [])

    .controller('BlogCtrl', ['$scope', 'blogContent', function ($scope, blogContent) {

        $scope.clicked = function () {
            window.location.replace("#/Cnn");
        }

        $scope.blogs = blogContent.getBlogs();
}]);
