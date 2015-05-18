'use strict';

angular.module('simplTreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team/:teamLink',
        templateUrl: 'app/main.nav/main.nav.html',
        controller: 'MainNavCtrl',
        resolve : {
          teamLink : function($stateParams){
            return $stateParams.teamLink;
          }
        }
      });
  });
