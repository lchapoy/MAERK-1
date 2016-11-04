/**
 * Created by cleverjam on 11/3/16.
 */
class HoursController {

    constructor(months, employeeList, $mdEditDialog) {
        this.orderVal = 'client';
        this.page = 1;
        this.limit = 5;
        this.months = months;
        this.currentMonth = new Date();
        this.currentMonth = this.currentMonth.getMonth();
        console.log(this.currentMonth);
        this.employees = employeeList;

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
                    'md-maxlength':30,
                }
            }).then((ctrl)=>{
                var input = ctrl.getInput();
                input.$viewChangeListeners.push(function(){
                    input.$setValidity('test',input.$modelValue !== 'tets');
                })
            })
        }
    }
}

angular.module("maerkApp")
    .controller("HoursController", HoursController)