var app = angular.module('myAppRouter', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/About');

    $stateProvider

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('About', {
            url: '/About',
            templateUrl: 'app/components/about/about.html'
        })

        // Portfolio VIEWS ========================================
        .state('Portfolio', {
            url: '/Portfolio',
            templateUrl: 'app/components/portfolio/portfolio.html'
        })

        // Blog VIEWS ========================================
        .state('Blog', {
            url: '/Blog',
            templateUrl: 'app/components/blog/blog.html'
        })

        // CNN BLOG   ========================================
        .state('Cnn', {
            url: '/Cnn',
            templateUrl: 'app/components/blog/cnn.html'
        })

        // TIMELINE PAGE ======================================================
        .state('Timeline', {
            url: '/Timeline',
            templateUrl: 'app/components/timeline/timeline.html'
        })

        // CONTACT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Contact', {
            url: '/Contact',
            templateUrl: 'app/components/contact/contact.html'
        });
});
