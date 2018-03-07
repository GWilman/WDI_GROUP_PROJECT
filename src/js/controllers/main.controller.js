angular.module('gaFeedback').controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  '$rootScope',
  'currentUserService',
  '$state',
  '$transitions',
  '$timeout'
];

function MainCtrl(
  $rootScope,
  currentUserService,
  $state,
  $transitions,
  $timeout
) {
  const vm = this;

  vm.logout = logout;
  vm.showBurgerMenu = false;

  $rootScope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
    $rootScope.$broadcast('user defined', {
      user: vm.user
    });
  });

  function logout() {
    currentUserService.removeUser();
    $rootScope.$broadcast('flash', {
      type: 'info',
      content: 'You have successfully logged out.'
    });
  }

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

  $transitions.onSuccess({}, function() {
    vm.showBurgerMenu = false;
  });

  $rootScope.$on('error', (e, err) => {
    if (err.status === 401) {
      $state.go('login');
      $rootScope.$broadcast('flash', {
        type: 'danger',
        content: err.data.message
      });
    }
  });

  $rootScope.$on('flash', (e, message) => {
    vm.message = message.content;
    vm.messageType = message.type;

    $timeout(closeMessage, 1500);
  });

  function closeMessage() {
    vm.message = null;
    vm.messageType = null;
  }
}
