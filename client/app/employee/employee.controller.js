/**
 * Created by cleverjam on 10/25/16.
 */
angular.module("maerkApp")
    .controller("EmployeeController", function ($timeout, employeeList, $mdDialog) {

        this.selected = [];
        this.employees = employeeList;
        this.showAddDialog = function ($event) {
            $mdDialog.show({
                controller: "DialogController",
                controllerAs: "vm",
                templateUrl: "app/employee/employee-dialog/employee.dialog.html",
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true,
                locals: {
                    employee: this.selected[0]
                }
            })
        };

        this.selectedRowCallback = (rows)=> {
            $timeout(()=>{
                this.selected = rows;
                console.log(this.selected)
            },0);

        };

        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };


    });