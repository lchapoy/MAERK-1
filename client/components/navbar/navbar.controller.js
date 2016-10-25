'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

    constructor(Auth, $mdSidenav) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.toggle = function(){
          if($mdSidenav("toolbar").isOpen()) {
              $mdSidenav('toolbar').close()
          }
          else {
              $mdSidenav('toolbar').open()
          }
        };

        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
  }

}

angular.module('maerkApp')
  .controller('NavbarController', NavbarController);
