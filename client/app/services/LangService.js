'use strict';

angular.module('simplTreeApp')
 .factory('ErrorService', function($log){

    return {
      user_not_found : 'User not found'
    };
  });
