angular.module('portfolio')

  .directive('portfolioBody', portfolioBody);

  portfolioBody.$inject = [];

  function portfolioBody() {

    return {
      restrict: 'E'
      ,templateUrl: 'angular-frontend/components/portfolio-body/portfolioBody.html'
      ,link: function(scope, els, attrs){

      }
    }
  }
