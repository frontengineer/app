'use strict';

angular.module('simplTreeApp')
  .controller('TeamCreationCtrl', function ($scope, DomainService, $q, $log) {
    $scope.message = 'Hello';
    $scope.domains = DomainService.getDomains();

    $scope.teamSpace = {
      url       : '',
      teamName  : '',
      username  : '',
      email     : '',
      password  : ''

    };
    $scope.addDomain = function(){
      //e.preventDefault();

      $log.log('requested', $scope.teamSpace);
      var d = DomainService.addDomain($scope.teamSpace).then(function(a){
        console.log('a', a);
      }, function(b){
        console.log('b', b);
      });

    };

  });
