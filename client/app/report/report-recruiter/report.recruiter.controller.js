/**
 * Created by cleverjam on 11/10/16.
 */
class ReportRecruiterController {
    constructor(months) {
        this.months = months;
    }
}
angular.module('maerkApp')
    .controller('ReportRecruiterController', ReportRecruiterController);