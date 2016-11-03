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

            //generate reports by client
            var reports = {};

            function findOne(val) {
                if (val && reportList) {
                    for (var i = 0; i < reportList.length; i++) {
                        if ((reportList[i]._id === val) || (reportList[i].year === val)) {
                            return reportList[i];
                        }
                    }
                    return {};
                }
            }

            function clientReportData() {
                var deferred = $q.defer();
                //make sure reportList is finished populating.
                var clientReport = {};
                reportList.$promise
                    .then(()=> {
                        reportList.forEach(e=> {
                            clientReport[e.year] = {};
                            months.forEach((month, n)=> {
                                clientReport[e.year][month] = {};
                                clientReport[e.year][month].closed = n < e.closed;
                                //traverse through the array of employees.
                                e[month].forEach((emp)=> {
                                //initialize client object to populate with employee count and revenue
                                    clientReport[e.year][month][emp.client[0]] = clientReport[e.year][month][emp.client[0]] || {};
                                // Employee count for each client
                                // Revenue sum for each client
                                    clientReport[e.year][month][emp.client[0]] = {
                                        count: clientReport[e.year][month][emp.client[0]].count + 1 || 1,
                                        actual_revenue: clientReport[e.year][month][emp.client[0]]["actual_revenue"] +
                                        emp["client_bill_pay"] * emp["actual_hours"] || emp["client_bill_pay"] * emp["actual_hours"]
                                    };
                                });
                            });
                        });
                        reports.client = clientReport;
                        deferred.resolve(reports);
                    })
                    .catch(e=> {
                        deferred.reject(e);
                    });
                return deferred.promise;
            }


            return {
                reports: reportList,
                delete: function () {
                    //nothing to see here.
                },
                createYear: function (year) {
                    return new Report({year: year, closed: 0}).$create().then(
                        (newReport)=> {
                            reportList.push(newReport)
                        }
                    ).catch((e)=>{
                        console.log(e);
                    })
                },
                updateMonth: function(obj) {
                    var toUpdate = findOne(obj.year);
                    if (!obj._id && toUpdate._id) {
                        obj._id = toUpdate._id;
                        new Report(obj).$save().then((newObj) => {
                            for (var i = 0; i < reportList.length; i++) {
                                if (reportList[i]._id == newObj._id) {
                                    reportList[i] = newObj;
                                    break;
                                }
                            }

                        })
                    }
                },
                get: function(year){  //can return one or all years.
                    if(!year)
                        return reportList;
                    else
                        return findOne(year);
                },
                //build the report object that will be given to the chart/table.
                getReportData: function (type) {
                    if (type === "client")
                        return reports.client ? reports : clientReportData();
                    else { //load all
                        reports.client = reports.client || clientReportData();
                        return reports;
                    }
                }
            }
        });
})();