'use strict';

angular.module('maerkApp.auth', ['maerkApp.constants', 'maerkApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
