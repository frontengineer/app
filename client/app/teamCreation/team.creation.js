'use strict';

angular.module('simplTreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamCreation', {
        url: '/create/{id:[a-z]}',
        templateUrl: 'app/teamCreation/team.creation.html',
        controller: 'TeamCreationCtrl'
      });
  });
