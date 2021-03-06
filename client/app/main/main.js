'use strict';

angular.module('maerkApp')
    .config(function ($stateProvider) {
        $stateProvider.state('main', {
            abstract: true,
            template: '<main layout="row" flex></main>',
            resolve: {
                globals: function (GlobalResource) {
                    return GlobalResource.globals;
                }
            },
        });
    });
