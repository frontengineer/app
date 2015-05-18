'use strict';

angular.module('simplTreeApp')
  .factory('Auth', function (FIREBASE_URL, $firebaseAuth, $q, $http, $log) {
    var auth = new Firebase(FIREBASE_URL);

    var Auth =  {
      createProfile : function(user){

      },

      login : function(user){

        //$http.post('/api/authenticate', user).success(function(success){
        //  $log.log('success', success);
        //}).error(function(err){
        //  $log.log('err', err);
        //});
        var deferred = $q.defer(), msg;
        auth.authWithPassword({ email: user.email, password: user.password }, function(err, authData){
          if(!err){
            msg = 'next';
            deferred.resolve(msg);
          } else {

            switch(err.code){
              case 'INVALID_EMAIL':
                msg = 'Please try again';
                break;
              case 'INVALID_USER':
                msg = 'Please try again';
                break;
              default:
                    msg = 'Please retry'
            }
            deferred.reject(msg);
            console.log('all bad', err);
          }
        });

        return deferred.promise;
      },

      logout : function(){
        auth.unauth();
      },

      register : function(user){
        var deferredUser = $q.defer();
        userStore.createUser({ email: user.email, password: user.password }, function(error, userData){
          if(!error){
            deferredUser.resolve('User was created');
          }

          deferredUser.reject('Unable to create user');
        });
        return deferredUser.promise;
      },

      resolverUser : function(){
        return auth.getAuth();
      },

      signedIn : function(){
        return !!Auth.user.provider
      },

      user : {}
    };
    auth.onAuth(function(user) {
      angular.copy(user, Auth.user);
      if (user) {
        console.log('found user ', user);
        //$firebaseObject(ref.child('/profile').child(user.uid)).$loaded(function(userdata){
        //  console.log('user data', userdata);
        //  Auth.user.profile = userdata;
        //});
      } else {
        console.log('Logged out');
      }
    });

    return Auth;
  });
