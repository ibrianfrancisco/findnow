(function() {
'use strict';

  angular
    .module('app')
    .controller('PostController', PostController);


  PostController.$inject = ['$stateParams', 'PostService', '$scope'];

  function PostController($stateParams, PostService, $scope) {
    var vm = this;

    vm.post = PostService.get({id: $stateParams.id});
  }

})();
