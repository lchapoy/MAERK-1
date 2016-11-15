/**
 * Created by cleverjam on 11/15/16.
 */
class GlobalsController {
    constructor(globals){
        this.globals = globals;
    }
}

angular.module('maerkApp')
.controller('GlobalsController', GlobalsController);