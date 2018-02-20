angular.module('myAppTimelineCtrl', []).controller('TimelineCtrl', ['$scope', 'timelineContent',
    function ($scope, timelineContent) {
        $scope.terms = timelineContent.getTerms();
        $scope.coopTerms = timelineContent.getCoopTerms();
        $scope.studyTerms = timelineContent.getStudyTerms();
}]);
