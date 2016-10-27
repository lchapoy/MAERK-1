/**
 * Created by cleverjam on 10/25/16.
 */
angular.module("maerkApp")
    .controller("EmployeeController", function ($timeout, employeeList) {

        this.selected = [];
        this.employees = employeeList;

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