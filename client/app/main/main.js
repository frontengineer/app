'use strict';

angular.module('simplTreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',

        views : {
          'header' : {
            templateUrl: 'app/partials/main_header.html'
          },
          'content' : {
            controller: 'MainCtrl',
            templateUrl: 'app/partials/signup.html'
          },
          'footer' : {
            templateUrl: 'app/partials/main_footer.html'
          }

        }
      })
      .state('signin', {
        url: '/signin',
        views : {
          'content@' : {
            templateUrl: 'app/partials/signin.html'
          }
        }
      })
      .state('confirmed', {
        url: '/confirmed',
        views : {
          'content@' : {
            templateUrl: 'app/partials/confirmed.html'
          }
        }
      })
      .state('confirmed.revite', {
        views : {
          'content@' : {
            templateUrl: 'app/partials/confirmed_domain_create.html'
          }
        }
      })
      .state('confirmed.invite', {
        views : {
          'content@' : {
            templateUrl: 'app/partials/confirmed.invite.html'
          }
        }
      });
  });
