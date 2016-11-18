/**
 * Created by cleverjam on 11/15/16.
 */
class GlobalsController {
    constructor(globals){
        this.globals = globals;
        this.enabled = true;
    }

    update(globalVar) {
        this.enabled = false;
        this.globals.$save()
            .then(d => {
                this.globals = d;
                this.enabled = true;
                globalVar.$setPristine();
            })
            .catch(e => {
                console.log(e);
            })

    }
}

angular.module('maerkApp')
.controller('GlobalsController', GlobalsController);