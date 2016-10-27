/**
 * Created by cleverjam on 10/25/16.
 */
'use strict';

angular.module('maerkApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main.employee', {
                url: '/employee',
                templateUrl: 'app/employee/employee.html',
                controller: 'EmployeeController',
                controllerAs: 'vm',
                resolve: {
                    employeeList: function (EmployeeResource) {
                        return EmployeeResource.get();
                    }
                },
                authenticate: true
            });
    });