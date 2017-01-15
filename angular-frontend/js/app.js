angular.module('portfolio', ['ngRoute', 'workController', 'blogController', 'skateController'])

  .config(appRoutes);

  appRoutes.$inject = ['$routeProvider']

  function appRoutes ($routeProvider) {
      window.location.href = "https://www.linkedin.com/in/jackconnor"

      $routeProvider
        .when('/', {
          templateUrl: 'angular-frontend/components/portfolio-body/portfolioBody.html'
          ,controller: 'workCtrl'
          ,controllerAs: 'work'
        })

        .when('/blog', {
          templateUrl: 'angular-frontend/components/blog/blog.html'
          ,controller: 'blogCtrl'
          ,controllerAs: 'blog'
        })

        .when('/skate', {
          templateUrl: 'angular-frontend/components/skateboarding/skateboard.html'
          ,controller: 'skateCtrl'
          ,controllerAs: 'skate'
        })
  }
