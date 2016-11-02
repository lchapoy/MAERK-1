'use strict';

angular.module('maerkApp')
  .directive('navbar', () => ({
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      scope: true,
      controller: 'NavbarController',
      controllerAs: 'nav'
  }));
