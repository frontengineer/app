'use strict';

describe('Controller: TeamCreationCtrl', function () {

  // load the controller's module
  beforeEach(module('simplTreeApp'));

  var TeamCreationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCreationCtrl = $controller('TeamCreationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
