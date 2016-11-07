angular.module('portfolio')

  .directive('footDirective', footDirective);

  footDirective.$inject = [];

  function footDirective() {
    return {
      templateUrl: 'angular-frontend/components/footer/footer.html'
      ,link: function(scope, els, attrs) {
        console.log(els);
      }
    }
  }
