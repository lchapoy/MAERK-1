/**
 * Created by cleverjam on 11/1/16.
 */
(function () {
    angular.module("maerkApp")
        .constant("reportsURL", "/api/reports/")
        .constant("months", [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ])
        .factory("ReportResource", function ($resource, reportsURL, months, $q) {

            var Report = $resource(reportsURL + ":id", {id: "@_id"},
                {
                    create: {method: "POST"},
                    save: {method: "PUT"}
                });

            var reportList = Report.query();
            var currentYear;  //current working year, it is the highest year in the report database (most recent)
            var needRefresh = false;

            reportList.$promise.then((d)=> {
                console.log(d);
                d.forEach(rep => {
                    if (rep.year) {
                        console.log(rep.year)
                        if (!currentYear || (currentYear < rep.year))
                            currentYear = rep.year;
                    }
                })
            });
            //generate reports by client
            var reports = {};

            function createYear(year) {
                var deferred = $q.defer();
                needRefresh = true;
                if (!(reportList[year])) {
                    new Report({year: year, closed: 0}).$create().then(
                        (newReport)=> {
                            reportList.push(newReport);
                            deferred.resolve(newReport);
                        }
                    ).catch((e)=> {
                        console.log(e);
                        deferred.reject('couldn\'t create year');
                    })
                }

                return deferred.promise;
            }

            function updateMonth(obj) {
                var deferred = $q.defer();
                needRefresh = true;
                findOne(obj.year)
                    .then((toUpdate)=> {
                        if (!obj._id && toUpdate._id) {
                            obj._id = toUpdate._id;
                        }
                        if(obj._id) {
                            return new Report(obj).$save().then((newObj) => {
                                for (var i = 0; i < reportList.length; i++) {
                                    if (reportList[i]._id == newObj._id) {
                                        reportList[i] = newObj;
                                        deferred.resolve(newObj);
                                        break;
                                    }
                                }

                            })
                        }
                    })
                    .catch((e)=> {
                        console.log(e);
                        deferred.reject(e);
                    });
                return deferred.promise;
            }

            function closeMonth(val) {
                console.log(val);
                if (val === 12) {
                    // TODO: createYear(currentYear+1).then ....
                    var deferred = $q.defer();
                    updateMonth({year: currentYear, closed: val}).then(()=> {
                        console.log(currentYear);
                        return createYear(currentYear + 1)
                    }).then((d)=> {
                        reportList.$promise.then(()=>{
                            reportList.forEach((e,i)=>{
                                if(e._id === d._id) {
                                    reportList[i] = d;
                                }
                            });
                        });
                        currentYear++;
                        deferred.resolve(d)
                    });
                    return deferred.promise;
                }
                return updateMonth({year: currentYear, closed: val})
            }

            function findOne(val) {
                var deferred = $q.defer();
                console.log(reportList);
                reportList.$promise.then(()=> {
                    for (var i = 0; i < reportList.length; i++) {
                        if ((reportList[i]._id === val) || (reportList[i].year === val)) {
                            deferred.resolve(reportList[i]);
                        }
                    }
                    deferred.resolve({});
                });
                return deferred.promise;
            }

            function get(year) {  //returns current year
                var deferred = $q.defer();
                reportList.$promise.then(()=> {
                    year = year || currentYear || (new Date().getYear() + 1900);
                    currentYear = currentYear || year;
                    findOne(year).then((obj)=> {
                        if (!(obj.year === year)) {
                            createYear(year)
                                .then((d)=> {
                                    deferred.resolve(d);
                                })
                                .catch(()=> {
                                    console.log('create year error');
                                    deferred.reject('something bad happened');
                                })
                        }
                        else {
                            deferred.resolve(obj);
                        }
                    })
                });
                return deferred.promise;
            }

            function getReportData(type) {
                if (needRefresh) {
                    return generateReportData();
                } else {
                    if (type === "skill")
                        return reports.skill ? reports : generateReportData();
                    if (type === "client")
                        return reports.client ? reports : generateReportData();
                    else { //load all
                        reports.client = reports.client || generateReportData();
                        return reports;
                    }
                }

            }

            function generateReportData() {
                var deferred = $q.defer();
                //make sure reportList is finished populating.
                var clientReport = {};
                var skillReport = {};
                reportList.$promise
                    .then(()=> {
                        reportList.forEach(e=> {
                            clientReport[e.year] = {};
                            skillReport[e.year] = {};
                            months.forEach((month, n)=> {
                                //client report closed?
                                clientReport[e.year][month] = {};
                                clientReport[e.year][month].closed = n < e.closed;
                                //skill report closed?
                                skillReport[e.year][month] = {};
                                skillReport[e.year][month].closed = n < e.closed;

                                //traverse through the array of employees.
                                e[month].forEach((emp)=> {
                                    //initialize client object to populate with employee count and revenue
                                    clientReport[e.year][month][emp.client[0]] = clientReport[e.year][month][emp.client[0]] || {};
                                    skillReport[e.year][month][emp.skill[0]] = skillReport[e.year][month][emp.skill[0]] || {};
                                    // Employee count for each client
                                    // Revenue sum for each client
                                    clientReport[e.year][month][emp.client[0]] = {
                                        count: clientReport[e.year][month][emp.client[0]].count + 1 || 1,
                                        actual_revenue: clientReport[e.year][month][emp.client[0]]["actual_revenue"] +
                                        emp["client_bill_pay"] * emp["actual_hours"] || emp["client_bill_pay"] * emp["actual_hours"]
                                    };
                                    // Employee count for each client
                                    // Revenue sum for each client
                                    skillReport[e.year][month][emp.skill[0]] = {
                                        count: skillReport[e.year][month][emp.skill[0]].count + 1 || 1,
                                        actual_revenue: skillReport[e.year][month][emp.skill[0]]["actual_revenue"] +
                                        emp["client_bill_pay"] * emp["actual_hours"] || emp["client_bill_pay"] * emp["actual_hours"]
                                    };
                                });
                            });
                        });
                        reports.client = clientReport;
                        reports.skill = skillReport;
                        deferred.resolve(reports);
                    })
                    .catch(e=> {
                        deferred.reject(e);
                    });
                return deferred.promise;
            }


            return {
                reports: reportList,
                createYear: createYear,
                updateMonth: updateMonth,
                get: get,
                getReportData: getReportData,
                closeMonth: closeMonth
            }
        })
})();