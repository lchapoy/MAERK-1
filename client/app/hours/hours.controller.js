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
        this.year = reportData.year;
        this.employees = [];  //will be initialized with loadMonth();
        this.closed = reportData.closed;

        //controller logic
        this.q = $q;
        this.ReportResource = ReportResource;
        this.employeeList = employeeList;
        this.reportData = reportData;
        this.mdDialog = $mdDialog;
        this.mdEditDialog = $mdEditDialog;
        this.selected = new Date(this.reportData.year, this.closed);
        //initialize
        this.promise = this.loadMonth()
    }

    //load a month after the selected date has been updated!
    loadMonth() {
        var deferred = this.q.defer();
        var year = this.reportData.year || this.selected.getYear() + 1900;
        var month = this.selected.getMonth();
        this.employees = [];
        var loadEmployees = () => {
            this.employeeList.forEach(employee=> {
                employee['actual_hours'] = '';
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
                this.closed = reportData.closed;
                this.year = reportData.year;
                deferred.resolve();
            })

        };
        //reportData for the year already loaded and the month has zero employees...
        if ((this.reportData.year === year) && (this.reportData[this.months[month]].length === 0)) {
            loadEmployees();
        }
        //create new year
        else if (this.reportData.year !== year) {
            return this.ReportResource.createYear(year).then((r)=> {
                this.reportData = r; //get new year's report data
                loadEmployees();
            })
        } //reportData's month already has employees, load them...
        else if (this.reportData[this.months[month]].length > 0) {
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
        if (this.isTableValid()) {
            //noinspection JSUnresolvedFunction
            var confirm = this.mdDialog.confirm()
                .title("Are you sure you want to close this month")
                .textContent(`There are a total of ${this.employees.length} employees in this month's registration.`)
                .ariaLabel("Close monthly registration")
                .targetEvent(e)
                .ok("Close")
                .cancel("Cancel");
            this.promise = this.mdDialog.show(confirm);
            this.promise
                .then(()=> {
                    this.closed = this.closed + 1;
                    return this.ReportResource.closeMonth(this.closed);
                })
                .then((d)=> {
                    this.reportData = d;
                    this.loadMonth();
                });

            this.promise.catch(()=> {
                console.log("NOOOO");
            })
        }
        else {
            // Some employees do not have hours set
            //noinspection JSUnresolvedFunction
            this.mdDialog.show(
                this.mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('ERROR: Missing fields.')
                    .textContent('Please make sure that you specify hours for all of the employees.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(e)
            );
        }
    };

    isTableValid() {
        var month = this.selected.getMonth();

        for (var i = 0; i < this.reportData[this.months[month]].length; i++) {
            if (!this.reportData[this.months[month]][i]['actual_hours']) {
                return false;
            }
        }
        return true;

    }

    saveMonth() {
        var deferred = this.q.defer();
        var month = this.selected.getMonth();
        var updateObj = {
            _id: this.reportData._id,
        };
        updateObj[this.months[month]] = this.employees;
        this.ReportResource.updateMonth(updateObj)
            .then((reportData)=> {
                this.reportData = reportData;
                this.employees = this.reportData[this.months[month]];
                deferred.resolve();
        });
        return deferred.promise;
    }

    //************************************************
    // ******* EDIT HOURS AND OFFSET *****************
    //************************************************
    addHours(e, employee) {
        this.mdEditDialog.small({
            modelValue: employee['actual_hours'],
            clickOutsideToClose: true,
            placeholder: 'Add hours',
            disableScroll: true,
            targetEvent: e,
            save: (input) => {
                employee['actual_hours'] = input.$modelValue;
                this.saveMonth();
            },
            validators: {
                'md-maxlength': 3,
                'aria-label': 'Add employee hours'
            }
        }).then((ctrl)=> {
            var input = ctrl.getInput();
            input.$viewChangeListeners.push(() => {
                input.$setValidity('numeric', Number.isInteger(Number(input.$modelValue)));
            })
        })
    };

    addOffset(e, employee) {
        this.mdEditDialog.small({
            modelValue: employee['offset'],
            placeholder: 'Add offset',
            targetEvent: e,
            disableScroll: true,
            clickOutsideToClose: true,
            save: (input) => {
                employee.offset = input.$modelValue;
                this.saveMonth();
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

angular.module('maerkApp')
    .controller('HoursController', HoursController);