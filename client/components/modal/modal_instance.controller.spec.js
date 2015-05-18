'use strict';
describe('Controller: ModalInstanceCtrl', function () {  
// load the controller's module 
beforeEach(module('simplTreeApp'));  

  var ModalInstanceCtrl,
    scope,
    $httpBackend,
    ctrl;
  var modalInstance = { close: function() {}, dismiss: function() {} };
  var teams = [1,2,3]; // whatever...
  // Initialize the controller and a mock scope 

  beforeEach(inject(function ($httpBackend, $controller, $rootScope) { 
    scope = $rootScope.$new(); 
    //ModalInstanceCtrl = $controller('ModalInstanceCtrl', { 
    //  $scope: scope 
    //
    //}); 
    ctrl = $controller('ModalInstanceCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      teams: teams});
  }));  

  it('should ...', function () { 
    expect(teams.length).toBe(3); 
  }); 
}); 
