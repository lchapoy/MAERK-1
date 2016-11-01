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
                //resolve mongo stuff.
                employeeData: function(EmployeeResource){
                    return EmployeeResource.get();
                },
                reportData: function(ReportResource){
                    return ReportResource.get();
                }
            }
        });
        //reports skills.
        $stateProvider.state('main.report.skill',{
            url: '/skills',
            templateUrl: 'app/report/report-skill/report.skill.html'
        })
    });