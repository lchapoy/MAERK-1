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
        this.closed = reportData.closed;

        //controller logic
        this.q = $q;
        this.ReportResource = ReportResource;
        this.employeeList = employeeList;
        this.reportData = reportData;
        this.mdDialog = $mdDialog;
        this.selected = new Date(this.reportData.year, this.closed);
        //initialize
        this.promise = this.loadMonth().then(()=> {
            console.log(this.reportData);
        });
    }

    //load a month after the selected date has been updated!
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

            // Updating the reportData's month if no employees found in it:
            let updateObj = {
                _id: this.reportData._id,
            };
            updateObj[this.months[month]] = this.employees;
            this.ReportResource.updateMonth(updateObj).then((reportData)=> {
                this.reportData = reportData;
                deferred.resolve();
            })

        };
        //are the employees already loaded??
        if (this.reportData.year === year && this.reportData[this.months[month]].length === 0) { //selected year same as loaded report year.
            loadEmployees();
        } else if (this.reportData.year !== year) {
            console.log('creating year and loading employees');
            return this.ReportResource.createYear(year).then((r)=> {
                this.reportData = r; //get new year's report data
                loadEmployees();
            })
        } else if (this.reportData[this.months[month]].length > 0) {
            this.employees = this.reportData[this.months[month]];
            deferred.resolve();
        }
        return deferred.promise;
    }

    update(year, month) {
        if (year)
            this.selected.setYear(year);
        if (month)
            this.selected.setMonth(month);
        this.promise = this.loadMonth()
    }

    close(e) {
        var confirm = this.mdDialog.confirm()
            .title("Are you sure you want to close this month")
            .textContent(`There are a total of ${this.employees.length} employees in this month's registration.`)
            .ariaLabel("Close monthly registration")
            .targetEvent(e)
            .ok("Close")
            .cancel("Cancel");
        this.promise = this.mdDialog.show(confirm);
        this.promise.then(()=> {
            this.closed = this.closed + 1;
            return this.ReportResource.closeMonth(this.closed - 1);
        }).then((d)=> {
            console.log(d);
            this.reportData = d;
        });
        this.promise.catch(()=> {
            console.log("NOOOO");
        })
    };
}

angular.module('maerkApp')
    .controller('HoursController', HoursController);