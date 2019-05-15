angular.module('myAppTimelineCtrl', []).controller('TimelineCtrl', ['$scope', 'timelineContent',
    function ($scope, timelineContent) {
        $scope.terms = timelineContent.getTerms();
//        $scope.internships = timelineContent.getInternships();
//        $scope.uniTerms = timelineContent.getUniTerms();
        $scope.coopTerms = timelineContent.getCoopTerms();
        $scope.studyTerms = timelineContent.getStudyTerms();
}]);
