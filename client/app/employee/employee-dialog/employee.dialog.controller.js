/**
 * Created by cleverjam on 10/27/16.
 */
(function () {
    class DialogController {

        constructor(employee, recruiters, $mdDialog, $mdConstant, $q) {
            this.recruiters = recruiters;
            this.context = employee ? "Edit" : "Add";
            this.emp = {};
            //chip separators.
            this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, 186];
            this.allClients = DialogController.loadClients();
            this.allRecruiters = this.loadRecruiters();
            this.deferred = $q.defer();

            if (employee) {
                angular.copy(employee, this.emp);
                this.emp.start_date = new Date(employee.start_date);
                this.emp.client = this.emp.client.map((c)=> {
                    return {name: c}
                });
            }
            else {
                this.emp.start_date = new Date();
                this.emp.client = [];
                this.emp.skill = [];
            }

            this.submit = function (e) {
                e.preventDefault();
                this.emp.client = this.fixClient(this.emp.client);
                this.deferred.promise.then(() => {
                    $mdDialog.hide(this.emp);
                }).catch(()=> {
                    console.log('nothing happens');
                    this.deferred = $q.defer();
                });
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
        loadRecruiters() {
            return this.recruiters.map(recruiter => {
                return {
                    name: (recruiter.first_name + " " + recruiter.last_name).toLowerCase(),  //must be name!
                    value: recruiter.first_name + " " + recruiter.last_name
                };
            });
        }
        selectedItemChange(rec) {
            this.emp.recruiter = rec.value;
        }
        searchRecruiters(query) {
            return query ? this.allRecruiters.filter(this.createFilterFor(query)) : this.allRecruiters;

        }
        static loadClients() {
            //ClientResource here!
            return ["verizon", "deloitte", "intuit", "boy scouts"].map(function (c) {
                return {name: c} //must be name!
            });
        }
    }

        angular.module("maerkApp")
            .controller("DialogController", DialogController);
})();
