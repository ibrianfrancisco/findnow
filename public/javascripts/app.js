(function() {
'use strict';

  angular.module('app', ['ui.router', 'ngAnimate', 'ngResource'])
    .config(configRoutes);

  configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html',
      controller: 'NavController as ctrl'
    })

  $urlRouterProvider.otherwise('/welcome');
  }



})();
