'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('simplTreeApp'));

  var MainCtrl,
      scope,
      httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $http) {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {

    //httpBackend.flush();
    //scope.$digest();
    expect(scope.awesomeThings.length).toBe(2);
  });
});
