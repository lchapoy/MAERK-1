/**
 * Created by cleverjam on 11/9/16.
 */
class RecruiterController {
    constructor(recruiterList) {
        this.Math = window.Math;
        this.page = 1;
        this.orderVal = "first_name";
        this.limit = 5;
        this.filterBy='first_name';
        this.selected = [];
        this.recruiters = recruiterList;
        console.log(recruiterList)
    }
}
angular.module('maerkApp')
    .controller('RecruiterController', RecruiterController);