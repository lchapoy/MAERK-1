/**
 * Created by cleverjam on 11/2/16.
 */
class ReportClientController {

    constructor(reportData){
        this.reports = reportData;
        console.log(this.reports)
    }
}
angular.module('maerkApp')
.controller('ReportClientController', ReportClientController);