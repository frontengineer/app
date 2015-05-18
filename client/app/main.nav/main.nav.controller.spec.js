'use strict';

describe('Controller: MainNavCtrl', function () {

  // load the controller's module
  beforeEach(module('simplTreeApp'));

  var MainNavCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainNavCtrl = $controller('MainNavCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
