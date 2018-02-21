var app = angular.module('myAppRouter', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/About');
    $stateProvider
        .state('About', {
            url: '/About',
            templateUrl: 'app/components/about/about.html'
        })
        .state('Portfolio', {
            url: '/Portfolio',
            templateUrl: 'app/components/portfolio/portfolio.html'
        })
        .state('Blog', {
            url: '/Blog',
            templateUrl: 'app/components/blog/blog.html'
        })
        .state('Cnn', {
            url: '/Cnn',
            templateUrl: 'app/components/blog/cnn.html'
        })
        .state('Timeline', {
            url: '/Timeline',
            templateUrl: 'app/components/timeline/timeline.html'
        })
        .state('Contact', {
            url: '/Contact',
            templateUrl: 'app/components/contact/contact.html'
        });
});
