'use strict';

angular.module('simplTreeApp')
 .factory('GeneralStore', function(FIREBASE_URL){
    return {
      getStore : function(refPath){
        var pathing = (refPath !== '') ? FIREBASE_URL + refPath : FIREBASE_URL;
        return new Firebase(pathing);
      }
    }
  });
