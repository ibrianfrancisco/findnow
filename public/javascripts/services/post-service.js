(function () {
'use strict';

  angular.module('app')
    .factory('PostService', PostService);

  PostService.$inject = ['$resource'];

  function PostService($resource) {
    return $resource('/api/posts/');
  }

})();
