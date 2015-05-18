'use strict';

angular.module('simplTreeApp')
  .controller('ProductsCtrl', function ($scope, $firebaseArray) {
    var fbData = new Firebase('https://glaring-inferno-1396.firebaseio.com');
    $scope.message = 'Hello';
    $scope.lineItems = [];

    var self = $scope;

    fbData.on('child_added', function(DataSnapshot){
      console.log('data got added');
      //  $scope.BOMColumns = snapshot.val();
      //  console.log($scope.BOMColumns[0]);
      //  //$scope.BOMColumns.shift();
      $scope.lineItems = DataSnapshot.val();
      $scope.$apply();
      console.log($scope.lineItems);
      console.log($scope.lineItems.length);
      //    angular.forEach($scope.lineItems, function(value) {
      //      console.log(value);
      //    });
    })
    fbData.on('child_removed', function(DataSnapshot){
      console.log('data got removed');
      console.log(DataSnapshot.val());
      $scope.lineItems = [];//DataSnapshot.val();
      $scope.$apply();
    })
  });
