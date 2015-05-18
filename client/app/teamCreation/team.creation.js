'use strict';

angular.module('simplTreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamCreation', {
        url: '/create/:id/',
        templateUrl: 'app/teamCreation/team.creation.html',
        controller: 'TeamCreationCtrl'
      });
  });
