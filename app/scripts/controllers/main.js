'use strict';

/**
 * @ngdoc function
 * @name confessmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the confessmeApp
 */
angular.module('confessmeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
