angular.module('workController', [])

  .controller('workCtrl', workCtrl);

  workCtrl.$inject = [];

  function workCtrl() {
    console.log('on the work controller');
  }
