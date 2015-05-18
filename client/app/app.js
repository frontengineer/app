'use strict';

angular.module('simplTreeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angularFileUpload',
  'firebase'
])
  .constant('FIREBASE_URL', 'https://glaring-inferno-1396.firebaseio.com')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

       $locationProvider.html5Mode(true);
  });

angular.module('simplTreeApp').controller('UploadCtrl', function($scope, FileUploader) {
    $scope.uploader = new FileUploader({ url : '/uploads'});
    $scope.uploader.onError = function(response, status, headers){
      console.log('flub');
      console.log(response);
      console.log(status);
      console.log(headers);
    }
  });
