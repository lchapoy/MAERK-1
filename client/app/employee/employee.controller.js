/**
 * Created by cleverjam on 10/25/16.
 */
class EmployeeController {
    constructor($timeout, employeeList, recruiterList, $mdDialog, EmployeeResource, globals) {
        this.page = 1;
        this.orderVal = "first_name";
        this.limit = 5;
        this.filterBy='first_name';
        this.selected = [];
        this.globals = globals;
        this.employees = employeeList;
        this.recruiters = recruiterList;
        this.mdDialog = $mdDialog;
        this.EmployeeResource = EmployeeResource;
    }

    deleteEmployee($event, employees) {
        //noinspection JSUnresolvedFunction
        var prompt = this.mdDialog.confirm()
            .title("Are you sure you want to DELETE Employees")
            .textContent(`You are deleting (${employees.length}) Employees. This action CANNOT be reversed.`)
            .ariaLabel("Active status change confirmation")
            .targetEvent($event)
            .ok("DELETE")
            .cancel("Cancel");
        this.mdDialog.show(prompt).then(()=> {
            this.selected.forEach((employee) => {
                this.EmployeeResource.delete(employee)
                    .then((updated)=> {
                        this.employees = updated;
                        this.selected = [];
                });
            });
        }, ()=> {
            console.log("no employees deleted.")
        })
    }

    toggleActive($event, val) {
        //noinspection JSUnresolvedFunction
        var prompt = this.mdDialog.confirm()
            .title("Please confirm active status change")
            .textContent(`You are changing the status for (${this.selected.length}) employees to ${val ? "active" : "inactive"}`)
            .ariaLabel("Active status change confirmation")
            .targetEvent($event)
            .ok("Change Status")
            .cancel("Cancel");
        this.mdDialog.show(prompt).then(()=> {
            this.selected.forEach((employee)=> {
                if (employee.activate !== val) {
                    console.info("Toggling active status for:", employee["first_name"]);
                    employee.activate = val;
                    employee.$save();
                }
            })
        }, ()=> {
            console.log("no status changed.")
        })
    }

    showAddDialog($event, selected) {
        this.mdDialog.show({
            controller: "DialogController",
            controllerAs: "vm",
            templateUrl: "app/employee/employee-dialog/employee.dialog.html",
            parent: angular.element(document.body),
            targetEvent: $event,
            clickOutsideToClose: true,
            fullscreen: true,
            locals: {
                employee: selected ? selected[0] : null,
                recruiters: this.recruiters,
                globals: this.globals
            }
        }).then((emp)=> {
            if (!emp._id) {
                this.EmployeeResource.create(emp);
            }
            else {
                this.EmployeeResource.update(emp);
            }
        })
    }

    openMenu($mdOpenMenu, ev) {
        this.originatorEv = ev;
        $mdOpenMenu(ev);
    }
}

angular.module('maerkApp')
    .controller('EmployeeController', EmployeeController);





