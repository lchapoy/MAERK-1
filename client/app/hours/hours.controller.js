/**
 * Created by cleverjam on 11/3/16.
 */
class HoursController {

    constructor(months, $mdEditDialog, EmployeeResource, ReportResource, $q, reportData) {
        this.orderVal = 'client';
        this.page = 1;
        this.limit = 5;
        this.months = months;
        console.log(reportData);

        //STARTUP

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
    }
}

angular.module("maerkApp")
    .controller("HoursController", HoursController);
