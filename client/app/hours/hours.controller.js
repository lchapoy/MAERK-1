/**
 * Created by cleverjam on 11/3/16.
 */
class HoursController {

    constructor(months, employeeList, $mdEditDialog,$timeout, reportData) {
        this.orderVal = 'client';
        this.page = 1;
        this.limit = 5;
        this.months = months;
        this.currentMonth = new Date().getMonth();
        var currentYear = new Date().getYear() + 1900;
        this.years = [currentYear-1, currentYear, currentYear+1];  //TODO

        this.promise = $timeout(()=> {
            //load report
            this.employees = employeeList;
        }, 2000);
        this.selection = {
            year: currentYear,
            month: this.currentMonth
        };

        this.addHours = function(e, employee) {
            $mdEditDialog.small({
                modelValue: employee['actual_hours'],
                placeholder: 'Add hours',
                targetEvent: e,
                save: (input) =>{
                    console.log(input);
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
                    console.log(input);
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
        }
    }
}

angular.module("maerkApp")
    .controller("HoursController", HoursController)