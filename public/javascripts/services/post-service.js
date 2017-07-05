(function () {
'use strict';

  angular.module('app')
    .factory('PostService', PostService);

  PostService.$inject = ['$resource'];

  function PostService($resource) {
    return $resource(
      '/api/posts/:id',
      {id: '@_id'},
      {
        getpost: {
          method: 'GET',
          url: '/api/posts/:postId',
          params: {postId: '@postId'}
        }
      }
      );
  }

})();
