angular.module('portfolio')

  .directive('navbarDirective', navbarDirective);

  navbarDirective.$inject = [];

  function navbarDirective() {
    return {
      restrict: 'A'
      ,templateUrl: 'angular-frontend/components/navbar/navbar.html'
      ,link: function(scope, els, attrs){
        console.log('in the directive');
        console.log(els);
        console.log(scope);
      }
    }
  }
