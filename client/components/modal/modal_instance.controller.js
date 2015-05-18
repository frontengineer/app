'use strict';

angular.module('simplTreeApp')
  .controller('ModalInstanceCtrl', function ($scope, $modal, $modalInstance, teamService) {
    var userInputValidation, tmr, eagerValidation;
    $scope.error = null;
    $scope.errorStatus = 'hide';

    $scope.okLookAhead = function(){
      clearTimeout(tmr);
      $scope.error = null;
      $scope.errorStatus = 'hide';

      tmr = setTimeout(function(){
        eagerValidation = teamService.validateTeamName($scope.teamName);
        if(_.has(eagerValidation, 'error')){
          $scope.error =  eagerValidation.error;
          $scope.errorStatus = 'alert ';
          $scope.$apply();
          console.log('scope error', $scope.error);
        }
       }, 1000);
    };

    $scope.ok = function () {
      userInputValidation = teamService.addTeam($scope.teamName);
      if(_.has(userInputValidation, 'error')){
        $scope.error =  userInputValidation.error; //'Sorry. That team name is in use';
        $scope.errorStatus = 'alert ';
        console.log('end error', $scope.error);
        return;
      }
      $modalInstance.close(userInputValidation);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
