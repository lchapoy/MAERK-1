/**
 * Created by cleverjam on 10/27/16.
 */
(function () {
    class DialogController {

        constructor(employee, recruiters, $mdDialog, $mdConstant, $q, globals) {
            this.globals = globals;
            console.log(globals);
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

            this.getPayVacationCost = () => {
                if (this.emp.salary) {
                    return (((this.emp.salary * this.globals.payroll_taxes) / this.globals.estimated_yearly_hours) * (this.globals.vacation_days * this.globals.daily_hours)).toFixed(2);
                }
                else {
                    return this.emp.pay_vacation_cost ? this.emp.pay_vacation_cost : '0';
                }

            };
            this.getKSHourlyCost = () => {
                if (this.emp.salary && this.emp.insurance && this.emp.immigration && this.emp.relocation) {
                    return (((+this.emp.salary * +this.globals.payroll_taxes) + +this.emp.insurance + +this.emp.relocation + +this.emp.immigration + +this.getPayVacationCost()) / +this.globals.estimated_yearly_hours).toFixed(2)
                }
                else {
                    return this.emp.ksquare_hourly_cost ? this.emp.ksquare_hourly_cost : '0';

                }
            };
            this.getTargetRate = () => {
                let cost = this.getKSHourlyCost();
                if (cost)
                    return (this.getKSHourlyCost() * this.globals.return_rate).toFixed(2);
                else
                    return this.emp.target_bill_rate ? this.target_bill_rate : '0';
            };

            this.submit = function (e) {
                e.preventDefault();
                this.deferred.promise.then(() => {
                    this.emp.client = this.fixClient(this.emp.client);
                    //save the calculated amounts:
                    this.emp.pay_vacation_cost = this.getPayVacationCost();
                    this.emp.ksquare_hourly_cost = this.getKSHourlyCost();
                    this.emp.target_bill_rate = this.getTargetRate();
                    $mdDialog.hide(this.emp);
                }).catch(()=> {
                    console.log('nothing happens');
                    this.deferred = $q.defer();
                });
            };

            this.close = function () {
                this.deferred.promise.then(() => {
                    $mdDialog.cancel();
                }).catch(()=> {
                    this.deferred = $q.defer();
                });
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
                return {name: c}; //must be name!
            });
        }
    }

        angular.module("maerkApp")
            .controller("DialogController", DialogController);
})();
