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
                        if ((reportList[i]._id === val) || (reportList[i].year === val)) {
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
                }
            }
        });
})();