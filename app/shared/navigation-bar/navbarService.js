angular.module('myAppNavbarService', [])
    .factory('navbarFactory', [function () {
        return {
            getNavbarHeadings: function () {
                var headings = [
                    {
                        title: 'About'
			}, {
                        title: 'Portfolio'
			}, {
                        title: 'Blog'
			}, {
                        title: 'Timeline'
			}, {
                        title: 'Contact'
			}
			];
                return headings;
            }
        };
}])
