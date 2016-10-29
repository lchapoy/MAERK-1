/**
 * Created by cleverjam on 10/25/16.
 */
angular.module("maerkApp")
    .controller("EmployeeController", function ($timeout, employeeList, $mdDialog, EmployeeResource) {
        this.page = 1;
        this.limit = 5;
        this.selected = [];
        this.employees = employeeList;
        this.showAddDialog = function ($event, selected) {
            $mdDialog.show({
                controller: "DialogController",
                controllerAs: "vm",
                templateUrl: "app/employee/employee-dialog/employee.dialog.html",
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true,
                fullscreen: true,
                locals: {
                    employee: selected ? selected : null
                }
            }).then((emp)=> {
                console.log(emp);
                EmployeeResource.create(emp);

            })
        };

        this.selectedRowCallback = (rows)=> {

                this.selected = rows;

        };

        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };


    });