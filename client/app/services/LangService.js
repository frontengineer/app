'use strict';

angular.module('simplTreeApp')
 .factory('LangService', function($log){

    return {

      i104: 'Continue Sign-Up',

      /* ERROR MESSAGES */
      e131 : 'Invalid Characters',
      e132 : 'User not found',
      e133 : 'Please correct the email or company name'
    };
  });
