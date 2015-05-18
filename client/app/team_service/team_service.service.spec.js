'use strict';

describe('Service: teamService', function () {

  // load the service's module
  beforeEach(module('simplTreeApp'));

  // instantiate service
  var teamService,
    $scope;

  beforeEach(inject(function (_teamService_, $rootScope) {
    teamService = _teamService_;
    $scope = $rootScope.$new();
  }));

  it('should do something', function () {
    //expect(!!teamService).toBe(true);
    expect(teamService.someMethod()).toBe(42);
  });

});
