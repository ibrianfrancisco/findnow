(function() {
'use strict';

  angular
    .module('app')
    .controller('ForumController', ForumController);

  ForumController.$inject = ['$state', 'PostService', '$scope'];

  function ForumController($state, PostService, $scope) {
    let vm = this;

    $scope.posts = PostService.query();

    vm.getPost = function(post) {
      let postId = post;
      PostService.getpost({postId}, post => {
        vm.post = post;
        $state.go('post', {id: post._id});
      });
    }
  }

})();
