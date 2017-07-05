(function() {
'use strict';

  angular
    .module('app')
    .controller('ReportController', ReportController);

  ReportController.$inject = ['$state', 'PostService'];

  function ReportController($state, PostService) {
    let vm = this;

    vm.createPost = function(subject, category, description, name, phone, email) {
      PostService.save({
        subject,
        category,
        description,
        name,
        phone,
        email
      }, data => $state.go('thankyou'));
    }

  }

})();
