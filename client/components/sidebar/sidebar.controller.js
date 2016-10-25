/**
 * Created by cleverjam on 10/25/16.
 */
'use strict';

class SidebarController {

    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
    }

}
angular.module('maerkApp')
    .controller('SidebarController', SidebarController);
