'use strict';

angular.module('simplTreeApp')
 .controller('AccountSparkCtrl', function($scope){
    $scope.email    = '';
    $scope.company  = '';

    $scope.DoIt = function() {
      console.log($scope.email, $scope.company);
    }
  });
