/**
 * Created by cleverjam on 10/27/16.
 */
(function () {
    class DialogController {

        constructor(employee, $mdDialog, $mdConstant) {
            this.context = angular.isArray(employee) ? "Edit" : "Add";
            //chip separators.
            this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, 186];
            this.allClients = this.loadClients();
            this.emp = {};
            this.emp.client = [];
            this.emp.skill = [];

            this.submit = function () {
                this.emp.client = this.fixClient(this.emp.client);
                $mdDialog.hide(this.emp);
            };
            this.close = function () {
                $mdDialog.cancel();
            };

        }

        //returns an array with client names [string]
        fixClient(client) {
            let result = [];
            client.forEach((e)=> {
                result.push(e.name);
            });
            return result;
        }
        querySearch(criteria) {
            return this.allClients.filter(this.createFilterFor(criteria));
        }

        createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(client) {
                return (client.name.indexOf(lowercaseQuery) != -1);
            };

        }

        loadClients() {
            //ClientResource here!
            return ["verizon", "deloitte", "intuit", "boy scouts"].map(function (c, i) {
                return {name: c}
            });
        }
    }

        angular.module("maerkApp")
            .controller("DialogController", DialogController);
})();
