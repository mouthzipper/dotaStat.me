'use strict';

/**
 * @ngdoc function
 * @name confessmeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the confessmeApp
 */
angular.module('confessmeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
