'use strict';

angular.module('simplTreeApp')
 .factory('InviteStore', function(FIREBASE_URL, $q){

    var store = new Firebase(FIREBASE_URL + '/pending_domains');

    return {
      addDomain : function(req){
        var deferred = $q.defer();
        console.log(req);

        return deferred.promise;
      }
    }
  });
