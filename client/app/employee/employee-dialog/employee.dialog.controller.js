/**
 * Created by cleverjam on 10/27/16.
 */
(function () {
    class DialogController {
        constructor(EmployeeResource, employee){
            this.context = employee ? "Edit" : "Add";

        }
    }

        angular.module("maerkApp")
            .controller("DialogController", DialogController);
})();