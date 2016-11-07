/**
 * Created by cleverjam on 11/3/16.
 */
class HoursController {

    constructor(months, $mdEditDialog, employeeList, $q, reportData) {
        this.orderVal = 'client';
        this.page = 1;
        this.limit = 10;
        this.reportData = reportData;
        this.year = reportData.year;
        this.months = months;
        this.closed = reportData.closed+11;
        this.selection = {
            year: 2016,
            month: 0
        };
        //table loading.
        var deferred = $q.defer();
        this.promise = deferred.promise;

        //************************************************
        // ******* UPDATING EMPLOYEE LIST ****************
        //************************************************

        this.update = (year = this.selection.year, month = this.selection.month) => {  //year and month must be Number
            console.log(year, month);
            if (this.reportData[months[this.closed]].length == 0) {
                this.initMonth(employeeList, 2016, month);
                setTimeout(() => {
                    deferred.resolve();
                }, 1000)
            }
        };

        //************************************************
        // ******* EDIT HOURS AND OFFSET *****************
        //************************************************
        this.addHours = function(e, employee) {
            $mdEditDialog.small({
                modelValue: employee['actual_hours'],
                placeholder: 'Add hours',
                targetEvent: e,
                save: (input) =>{
                    employee['actual_hours'] = input.$modelValue;
                },
                validators: {
                    'md-maxlength': 3,
                    'aria-label':'Add employee hours'
                }
            }).then((ctrl)=>{
                var input = ctrl.getInput();
                input.$viewChangeListeners.push(function(){
                    input.$setValidity('numeric', Number.isInteger(Number(input.$modelValue)));
                })
            })
        };

        this.addOffset = function (e, employee) {
            $mdEditDialog.small({
                modelValue: employee['actual_hours'],
                placeholder: 'Add offset',
                targetEvent: e,
                save: (input) => {
                    employee.offset = input.$modelValue;
                },
                validators: {
                    'md-maxlength': 3,
                    'aria-label': 'Add employee hours'

                }
            }).then((ctrl)=> {
                var input = ctrl.getInput();
                input.$viewChangeListeners.push(function () {
                    input.$setValidity('numeric', Number.isInteger(Number(input.$modelValue)));
                })
            })
        };

        this.update(2016, 0);
    }

    initMonth(employeeList, year, month) {
        var emp = [];
        employeeList.forEach((employee)=> {
            if (new Date(employee['start_date']).getYear() <= year) {
                if (new Date(employee['start_date']).getMonth() <= month) {
                    emp.push(employee);
                }
            }
        });
        this.employees = emp;
    }
}

angular.module("maerkApp")
    .controller("HoursController", HoursController);
