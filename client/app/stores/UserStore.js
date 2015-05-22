'use strict';

angular.module('simplTreeApp')
 .factory('UserStore', function(FIREBASE_URL, $q, LangService, $firebaseObject){

    var store = new Firebase(FIREBASE_URL);
    var dirtLot = 'sparta';

    var filter = function(str){
      return str.replace(/_|\.|@|!|#|\$|%|\&|\'|\*|\+|\-|\/|\+|\=|\?|\^|\{|\}|\~|`/g, '');
    };
    //var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return {
      addReference : function(user){
        //var cleanedEmail = filter(user.email);
        var pm = $q.defer();
        //console.log('cleanedEmail', cleanedEmail);
        store.child(dirtLot+'/queue/tasks').push(user, function(err, userData){
          if(err){
            pm.reject({ err: LangService['e145']});
          }else {
            console.log('set reference', userData);
            pm.resolve({ token: userData });
          }
        });

        return pm.promise;
        //store.child('queue/tasks').push(user);
      },

      checkForUser : function(user){
        var cleanedEmail, pm = $q.defer();

        if(!user.email || !user.company){
          pm.resolve({ err: LangService['e133'] });
          return pm.promise;
        }
        console.log( user.company.match(/_|\.|@|!|#|\$|%|\&|\'|\*|\+|\-|\/|\+|\=|\?|\^|\{|\}|\~|`/g));
        if(user.company.match(/_|\.|@|!|#|\$|%|\&|\'|\*|\+|\-|\/|\+|\=|\?|\^|\{|\}|\~|`/g) !== null){
          pm.resolve({ err: LangService['e131'] });
          return pm.promise;
        }

        if(!re.test(user.email)){
          pm.resolve({ err: LangService['e133'] });
          return pm.promise;
        }
        cleanedEmail = filter(user.email);

        store.child(dirtLot).child(cleanedEmail).on('value', function(snapshot) {
          console.log('is...', snapshot.val());
          pm.resolve({ msg : LangService['i104'], payload: snapshot.val() });
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
          pm.reject({ err:  LangService['e132'], msg : LangService.user_not_found });
        });

        return pm.promise;
      }
    }
  });
