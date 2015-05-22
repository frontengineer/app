'use strict';

angular.module('simplTreeApp')
  .controller('MainCtrl', function ($scope, $http, $window, Auth, $log, UserStore, $state) {
    $scope.awesomeThings = [1,2];
    $scope.user = {};
    $scope.error = '';

    //$http.get('/api/things').success(function(data) {
    //  $scope.awesomeThings = data;
    //  console.log('ang call /api/send', data);
    //});

    /**
     * USER Journey
     * request domain
     * if email exist say "trying to create team? or login to domain"
     *
     */


    $scope.initSignup = function(){
      UserStore.checkForUser($scope.user)
        .then(function(data){
          $log.log('data came back', data);
          if(!data.err){
            $log.log('the data', data);
            $scope.error = '';
            // add index and fire email
            if(!data.payload){
              UserStore.addReference($scope.user).then(function(){
                $state.go('confirmed');
              });
            } else {
              $state.go('confirmed.revite');
            }
          } else {
            $scope.error = data.err
          }
        })
        .catch(function(baddata){
          $log.log('the bad data', baddata);
        });

    };
    $scope.login = function(){
      $log.log($scope.user);
      Auth.login($scope.user).then(function(a){
        console.log('a',a);
        $window.location.replace('http://a.simpltree.moc:9000');
      }, function(b){
        console.log('b', b);
      })
    };

    $scope.logout = function(){
      Auth.logout();
      $log.log('logged out');
    };

  });
