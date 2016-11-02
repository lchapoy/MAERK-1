/**
 * Created by cleverjam on 11/2/16.
 */
angular.module('maerkApp')
    .directive('chart', ()=> ({
        templateUrl:'components/chart/chart.html',
        restrict:'E',
        controller:'ChartController',
        controllerAs: 'vm',
        scope: {
            bar: "=",
            pie:"=",
            labels: "@",
            series: "@",
            data: "@"
        },
        bindToController: true
    }));