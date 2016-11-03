/**
 * Created by cleverjam on 11/2/16.
 */
class ChartController {
    constructor() {
        if (this.pie) {
            this.mode = 'pie';
        }
        else {
            this.mode = 'bar';
        }
        console.log(this.labels)
        console.log(this.data)
    }
}

angular.module('maerkApp')
    .controller('ChartController', ChartController);