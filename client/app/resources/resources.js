'use strict';

angular.module('simplTreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/resources/resources.html',
        controller: 'ResourcesCtrl'
      });
  });
