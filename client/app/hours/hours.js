/**
 * Created by cleverjam on 11/3/16.
 */
angular.module('maerkApp')
    .config(function($stateProvider) {
        $stateProvider.state('main.hours', {
            authenticate: true,
            url: '/hours',
            templateUrl: "app/hours/hours.html",
            controller: "HoursController",
            controllerAs: "vm",
            resolve: {
                employeeList: function (EmployeeResource) {
                    return EmployeeResource.get();
                },
                reportData: function(ReportResource){
                    return ReportResource.get();
                }
            }
        });
    });