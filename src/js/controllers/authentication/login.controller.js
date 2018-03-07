angular.module('gaFeedback').controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$auth', '$state', 'currentUserService', '$rootScope'];

function LoginCtrl($auth, $state, currentUserService, $rootScope) {
  const vm = this;
  vm.submitForm = login;

  function login() {
    $auth
      .login(vm.user)
      .then(res => {
        if (res.status === 200) {
          currentUserService.getUser();
          $state.go('ratingsIndex');
          $rootScope.$broadcast('flash', {
            type: 'success',
            content: `You have successfully logged in, ${
              res.data.user.firstName
            }!`
          });
        }
      })
      .catch(() => {
        $rootScope.$broadcast('flash', {
          type: 'warning',
          content: 'Incorrect Credentials.'
        });
      });
  }
}
