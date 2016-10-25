/**
 * Created by cleverjam on 10/25/16.
 */
'use strict';

angular.module('maerkApp')
    .directive('sidebar', () => ({
        templateUrl: 'components/sidebar/sidebar.html',
        restrict: 'E',
        controller: 'SidebarController',
        controllerAs: 'sidebar'
    }));
