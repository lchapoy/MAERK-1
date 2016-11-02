/**
 * Created by cleverjam on 11/1/16.
 */

angular.module('maerkApp')
    .config(function($stateProvider) {
        $stateProvider.state('main.report',{
           abstract: true,
            authenticate: true,
            url:'/reports',
            template: "<ui-view></ui-view>",
            resolve: {
                reportData: function(ReportResource){
                    return ReportResource.getReportData();
                }
            }
        });
        //reports skills.
        $stateProvider.state('main.report.skill',{
            url: '/skills',
            templateUrl: 'app/report/report-skill/report.skill.html'
        });
        $stateProvider.state('main.report.client', {
            url: '/clients',
            templateUrl: 'app/report/report-client/report.client.html',
            controller: 'ReportClientController',
            controllerAs:'vm'
        })
    });