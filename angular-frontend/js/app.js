angular.module('portfolio', ['ngRoute'])

  .config(appRoutes);

  appRoutes.$inject = ['$routeProvider']

  function appRoutes ($routeProvider) {

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
