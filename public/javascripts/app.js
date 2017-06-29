(function() {
'use strict';

  angular.module('app', ['ui.router', 'ngAnimate', 'ngResource'])
    .config(configRoutes);

  configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html'
    })

    .state('reportform', {
      url: '/form',
      templateUrl: 'templates/reportform.html',
      controller: 'ReportController as vm'
    })

  $urlRouterProvider.otherwise('/welcome');
  }



})();
