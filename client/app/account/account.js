'use strict';

angular.module('maerkApp')
    .config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/account/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
            .state('logout', {
                url: '/logout?referrer',
                referrer: 'login',
                template: '',
                controller: function ($state, Auth) {
                    var referrer = $state.params.referrer || $state.current.referrer || 'login';
                    Auth.logout();
                    $state.go(referrer);
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/account/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'vm'
            })
            .state('main.settings', {
                url: '/settings',
                templateUrl: 'app/account/settings/settings.html',
                controller: 'SettingsController',
                controllerAs: 'vm',
                abstract: true,
                authenticate: true
            })
            .state('main.settings.globals', {
                url: '/globals',
                templateUrl: 'app/account/settings/globals/globals.html',
                controller: 'GlobalsController',
                controllerAs: 'vm',
                authenticate: true
            })
            .state('main.settings.password', {
                url: '/password',
                templateUrl: 'app/account/settings/password/password.html',
                authenticate: true
            })
    })
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function (event, next, nextParams, current) {
            if (next.name === 'logout' && current && current.name && !current.authenticate) {
                next.referrer = current.name;
            }
        });
    });
