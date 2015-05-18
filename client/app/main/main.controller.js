'use strict';

angular.module('simplTreeApp')
  .controller('MainCtrl', function ($scope, $http, $window, Auth, $log) {
    $scope.awesomeThings = [1,2];
    $scope.user = {
      to: 'dreply@yahoo.com'
    };

    //$http.get('/api/things').success(function(data) {
    //  $scope.awesomeThings = data;
    //  console.log('ang call /api/send', data);
    //});


    //

    $scope.initSignup = function(){
      console.log('init signup', $scope.user);
      $http.post('/api/send', $scope.user).success(function(data) {
        console.log('ang call /api/send', data);
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
