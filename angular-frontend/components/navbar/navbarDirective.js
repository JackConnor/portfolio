angular.module('portfolio')

  .directive('navbarDirective', navbarDirective);

  navbarDirective.$inject = [];

  function navbarDirective() {
    return {
      templateUrl: 'angular-frontend/components/navbar/navbar.html'
      ,link: function(scope, els, attrs){
        scope.toHome = function() {
          window.location = '/'
        }
      }
    }
  }
