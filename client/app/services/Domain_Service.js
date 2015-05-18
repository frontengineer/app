'use strict';

angular.module('simplTreeApp')
 .factory('DomainService', function(dataStore, Auth, FIREBASE_URL, $firebaseArray, $firebaseObject, $q, $log){
    var domainStore = dataStore.getStore('/domains');
    var status;

    return {
      addDomain : function(teamSpace){
        var deferred = $q.defer();

        /* User must enter name */
        if(!teamSpace){
          deferred.reject({ msg : 'Nothing to add'});
          return deferred.promise;
        }

        /*
        1.  Add or amend user account
        2. login and get credentials
        3. Create domain with user.owner
         */
        Auth.insertUser(teamSpace).then(function(one){
          console.log('one', one);
        }, function(two){
          console.log('two', two);
        });

        /* Try adding to store */
        domainStore.child(teamSpace.url).set({ teamUrl: teamSpace.url, teamName: teamSpace.teamName }, function(error){
          if(error){
            status = 'could not be saved';
            deferred.reject({ msg: 'all bad'});
            $log.log(status);
          } else {
            status = 'domain created';
            deferred.resolve('added ' + teamSpace);
            $log.log(status);
          }
        });

        return deferred.promise;
      },

      createDomain : function(domainName){
        console.log('domain to be set', domainName);
        return fb.child('domains').push({ label: domainName.label }, function(err, data){
          if(err){
            console.log('error: ', err);
          }
        })
      },

      getDomains : function(){
        return $firebaseArray(domainStore);
      }
    };
  });
