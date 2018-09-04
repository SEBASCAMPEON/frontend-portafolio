(function() {
  'use strict';

  angular
  .module('app.login.controller', [])
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$auth', '$location'];
  function LoginController($auth, $location) {
    var vm = this;

    vm.signIn = signIn;
    vm.getCurrentUser = getCurrentUser;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;
    vm.isAdmin = isAdmin;
    vm.isUser = isUser;

    function signIn() {
      $auth.login(vm.user)
        .then(function () {
          vm.user = {};
          $location.path('/');
            console.log('Sesión iniciada...');
        })
        .catch(function (error) {          
            console.log(error.status + ' ' + error.data);
        });
    }

    function getCurrentUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().user;
      } else {
        return '';
      }
    }

    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    function logout() {
      if (!$auth.isAuthenticated()) {
        return;
      }
      $auth.logout()
        .then(function() {
          $location.path('/');
             console.log('Sesión finalizada...');
        });
    }

    function isAdmin() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('ADMIN') !== -1;
      } else {
        return false;
      }
    }

    function isUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('USER') !== -1;
      } else {
        return false;
      }
    }

  }
})();
