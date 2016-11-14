angular.module('portfolio')

  .directive('portfolioBody', portfolioBody);

  portfolioBody.$inject = ['$http'];

  function portfolioBody($http) {

    return {
      restrict: 'E'
      // ,templateUrl: 'angular-frontend/components/portfolio-body/portfolioBody.html'
      ,link: function(scope, els, attrs){
        console.log($http);
        console.log('lkasdjflksdafj');
      }
    }
  }
