/**
 * Created by cleverjam on 11/10/16.
 */
angular.module('maerkApp')
    .directive('confirm', ()=> ({
        restrict: 'A',
        scope: {
            deferred: '=confirm',
            action: '=confirmAction'
        },
        controller: 'ConfirmController',
        controllerAs:'vm',
        bindToController: true
    }));
