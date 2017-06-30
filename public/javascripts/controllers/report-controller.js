(function() {
'use strict';

  angular
    .module('app')
    .controller('ReportController', ReportController);

  ReportController.$inject = ['$state', 'PostService'];

  function ReportController($state, PostService) {
    let vm = this;

    vm.test = 'hello';

    vm.createPost = function(subject, description, name, phone, email) {
      PostService.save({
        subject,
        description,
        name,
        phone,
        email
      }, data => $state.go('thankyou'));
    }

  }

})();
