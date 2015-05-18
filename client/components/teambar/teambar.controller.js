'use strict';

angular.module('simplTreeApp')
  .controller('NavbarCtrl', function ($scope, $location, $modal, teamService) {
    $scope.teams = teamService.getTeamList();

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.createTeam = function(size){
      var modalInstance = $modal.open({
        controller: 'ModalInstanceCtrl',
        templateUrl: 'components/modal/add_team.html',
        size: 'sm',
        windowClass : 'modal-create-team'
      });

      modalInstance.result.then(function (blahName) {
         console.log('new name', blahName);
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });

    };


  });
