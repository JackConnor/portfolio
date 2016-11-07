angular.module('portfolio')

  .directive('navbarDirective', navbarDirective);

  navbarDirective.$inject = [];

  function navbarDirective() {
    console.log('dirrrr');
    return {
      templateUrl: 'angular-frontend/components/navbar/navbar.html'
      ,link: function(scope, els, attrs){
        console.log(els);
      }
    }
  }
