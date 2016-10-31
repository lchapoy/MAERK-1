/**
 * Created by cleverjam on 10/25/16.
 */
angular.module("maerkApp")
    .controller("EmployeeController", function ($timeout, employeeList, $mdDialog, EmployeeResource) {
        this.page = 1;
        this.orderVal = "first_name";
        this.limit = 5;
        this.filterBy='first_name';
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
                    employee: selected ? selected[0] : null
                }
            }).then((emp)=> {
                if (!emp._id){
                    EmployeeResource.create(emp);
                }
                else {
                    EmployeeResource.update(emp);
                }
            })
        };

        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };


    });