/**
 * Created by cleverjam on 11/1/16.
 */
(function () {
    angular.module("maerkApp")
        .constant("reportsURL", "http://localhost:9000/api/reports/")
        .factory("ReportResource", function ($resource, reportsURL) {
            var Report = $resource(reportsURL + ":id", {id: "@_id"},
                {
                    create: {method: "POST"},
                    save: {method: "PUT"}
                });

            var reportList = Report.query();

            function findOne(val) {
                if (val && reportList) {
                    for (var i = 0; i < reportList.length; i++) {
                        if ((reportList[i]._id === val) && (reportList[i].year === val)) {
                            return reportList[i];
                        }
                    }
                    return {};
                }
            }

            return {
                reports: reportList,
                delete: function () {
                    //nothing to see here.
                },
                createYear: function (year) {
                    new Report({year: year}).$create().then(
                        (newReport)=> {
                            reportList.push(newReport)
                        }
                    ).catch((e)=>{
                        console.log(e);
                    })
                },
                updateMonth: function(obj) {
                    new Report(obj).$save().then((updated)=>{
                        for (var i = 0; i < reportList.length; i++) {
                            if (reportList[i]._id == updated._id) {
                                reportList[i] = updated;
                                break;
                            }
                        }
                    })
                },
                get: function(year){  //can return one or all years.
                    if(!year)
                        return reportList;
                    else
                        return findOne(year);
                }
            }
        });
})();