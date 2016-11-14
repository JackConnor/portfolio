angular.module('blogController', [])

  .controller('blogCtrl', blogCtrl)

  blogCtrl.$inject = [];

  function blogCtrl() {
    console.log('in the blog');
  }
