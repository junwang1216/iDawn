(function (bkmApp, controller) {

    bkmApp = angular.module('bkmApp', ['ngRoute', 'chart.js'], function () {
        console.log("started");
    });
     
    // configure our routes
    bkmApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home/home-index.html',
                controller  : 'homeController'
            })
            .when('/home', {
                templateUrl : 'pages/home/home-index.html',
                controller  : 'homeController'
            })
            .when('/users', {
                templateUrl : 'pages/users.html',
                controller  : 'usersController'
            })
            .when('/report', {
                templateUrl : 'pages/report.html',
                controller  : 'reportController'
            })
            .when('/news', {
                templateUrl : 'pages/news/news-index.html',
                controller  : 'newsController'
            })
            .when('/news-list', {
                templateUrl : 'pages/news/news-list.html',
                controller  : 'newsListController'
            })
            .when('/news-detail', {
                templateUrl : 'pages/news/news-detail.html',
                controller  : 'newsDetailController'
            })
            .when('/news-edit', {
                templateUrl : 'pages/news/news-edit.html',
                controller  : 'newsEditController'
            });
    });

    // create the controller
    bkmApp.controller('homeController', function ($scope) {
        $scope.message = '我是首页！！';
    });

    bkmApp.controller('usersController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    bkmApp.controller('reportController', function ($scope) {
        controller.report($scope);
    });

    /**
    * Enterprise Information Management Module
    */
    bkmApp.controller('newsController', function ($scope) {
        controller.news($scope);
    });
    bkmApp.controller('newsListController', function ($scope) {
        controller.newsList($scope);
    });
    bkmApp.controller('newsDetailController', function ($scope) {
        controller.newsDetail($scope);
    });
    bkmApp.controller('newsEditController', function ($scope) {
        controller.newsEdit($scope);
    });

})(bkmApp, controller);
