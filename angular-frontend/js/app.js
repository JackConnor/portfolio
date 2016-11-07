angular.module('portfolio', ['ngRoute', 'workController', 'blogController', 'skateController'])

  .config(appRoutes);

  appRoutes.$inject = ['$routeProvider']

  function appRoutes ($routeProvider) {
    // console.log('wot');

      $routeProvider
        .when('/', {
          templateUrl: 'angular-frontend/templates/portfolio.html'
          ,controller: 'workCtrl'
          ,controllerAs: 'work'
        })

        .when('/blog', {
          templateUrl: 'angular-frontend/templates/blog.html'
          ,controller: 'blogCtrl'
          ,controllerAs: 'blog'
        })

        .when('/skate', {
          templateUrl: 'angular-frontend/templates/skateboarding.html'
          ,controller: 'skateCtrl'
          ,controllerAs: 'skate'
        })
  }
