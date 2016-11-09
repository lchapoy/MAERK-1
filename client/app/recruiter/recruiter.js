/**
 * Created by cleverjam on 11/9/16.
 */

angular.module('maerkApp')
    .config(function($stateProvider) {
        $stateProvider.state('main.recruiter',{
            authenticate: true,
            url:'/recruiter',
            templateUrl: 'app/recruiter/recruiter.html',
            controller: 'RecruiterController',
            controllerAs: 'vm'
        });
    });