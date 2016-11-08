/**
 * Created by cleverjam on 11/3/16.
 */

class HoursController {

    constructor(months, employeeList, reportData, ReportResource, $q, $mdDialog, $mdEditDialog,) {

        //table configuration
        this.orderVal = 'first_name';
        this.page = 1;
        this.limit = 10;
        this.months = months;
        this.employees = [];  //will be initialized with loadMonth();

        //controller logic
        this.q = $q;
        this.ReportResource = ReportResource;
        this.employeeList = employeeList;
        this.reportData = reportData;
        this.selected = new Date(this.reportData.year, reportData.closed);
        //initialize
        this.promise = this.loadMonth().then(()=> {
            console.log(this.reportData);
        });
    }

    loadMonth() {
        var deferred = this.q.defer();
        var year = this.selected.getYear() + 1900;
        var month = this.selected.getMonth();
        this.employees = [];
        var loadEmployees = () => {
            this.employeeList.forEach(employee=> {
                var empDate = new Date(employee['start_date']);
                if (year == empDate.getYear() + 1900) {
                    if (month >= empDate.getMonth())
                        this.employees.push(employee);
                }
                else if (year > empDate.getYear() + 1900) {
                    this.employees.push(employee);
                }
            });
        };

        if (this.reportData.year === year) { //selected year same as loaded report year.
            loadEmployees();
            deferred.resolve();
        } else {
            return this.ReportResource.createYear(year).then((r)=> {
                loadEmployees();
                this.reportData = r; //get new year's report data
            })
        }
        return deferred.promise;
    }

    update(year, month) {
        if (year)
            this.selected.setYear(year);
        if (month)
            this.selected.setMonth(month);
        this.loadMonth();
    }
}

angular.module('maerkApp')
    .controller('HoursController', HoursController);