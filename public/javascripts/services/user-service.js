(function() {
'use strict';

  angular.module('app')
    .factory('UserService', UserService);

  UserService.$inject = ['$http', 'TokenService'];

  function UserService($http, TokenService) {

    let user = null;

    let service = {
      login,
      logout,
      signup,
      getUser,
      isLoggedIn
    };

    $http.get('/api/users/me').then(function(res) {
      user = res.data;
    });

    function login(credentials) {
      return $http.post('/api/users/login', credentials);
    }

    function logout() {
      TokenService.removeToken();
    }

    function signup(userData) {
      return $http.post('/api/users', userData);
    }

    function getUser() {
      return getUserFromToken();
    }

    function isLoggedIn() {
      return !!getUserFromToken();
    }

    return service;

    function getUserFromToken() {
      let token = TokenService.getToken();
      return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    }
  }


})();
