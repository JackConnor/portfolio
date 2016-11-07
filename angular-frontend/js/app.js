angular.module('portfolio', ['ngRoute', 'workController'])

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
          ,controller: 'workCtrl'
          ,controllerAs: 'work'
        })
  }
