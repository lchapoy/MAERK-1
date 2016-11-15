/**
 * Created by cleverjam on 11/15/16.
 */
class GlobalsController {
    constructor(){
        console.log('GlobalsController');
    }
}

angular.module('maerkApp')
.controller('GlobalsController', GlobalsController);