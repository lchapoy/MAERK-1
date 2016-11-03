/**
 * Created by cleverjam on 11/3/16.
 */
angular.module('maerkApp')
    .config(function($stateProvider) {
        $stateProvider.state('main.hours', {
            authenticate: true,
            url: '/hours',
            templateUrl: "app/hours/hours.html"
        });
    });