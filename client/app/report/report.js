/**
 * Created by cleverjam on 11/1/16.
 */

angular.module('maerkApp')
    .config(function($stateProvider) {
        $stateProvider.state('main.report',{
           abstract: true,
            authenticate: true,
            url:'/reports',
            template: "<ui-view layout='column' flex></ui-view>"
        });
        //reports skills.
        $stateProvider.state('main.report.skill',{
            url: '/skills',
            templateUrl: 'app/report/report-skill/report.skill.html',
            controller: 'SkillClientController',
            controllerAs: 'vm',
            resolve: {
                reportData: function (ReportResource) {
                    return ReportResource.getReportData('skill')
                }
            }
        });
        $stateProvider.state('main.report.client', {
            url: '/clients',
            templateUrl: 'app/report/report-client/report.client.html',
            controller: 'ReportClientController',
            controllerAs: 'vm',
            resolve: {
                reportData: function (ReportResource) {
                    return ReportResource.getReportData('client')
                }
            }
        })
    });