/**
 * Created by cleverjam on 11/9/16.
 */
(function () {
    angular.module('maerkApp')
        .constant('recruiterUrl', '/api/recruiter/')
        .factory('RecruiterResource', function ($resource, recruiterUrl) {
            var Recruiter = $resource(recruiterUrl + ":id",
                {
                    id: "@_id"
                },
                {
                    create: {method: "POST"},
                    save: {method: "PUT"}
                });
            var recruiterList = Recruiter.query();

            function findOne(id) {
                if (id && employeeList) {
                    for (var i = 0; i < employeeList.length; i++) {
                        if (employeeList[i]._id === id) {
                            return employeeList[i];
                        }
                    }
                    return {};
                }
            }

            return {
                recruiters: recruiterList,
                delete: function () {

                },
                create: function (rec) {
                    new Recruiter(rec).$create().then((newRec)=> {
                        recruiterList.push(newRec);
                    }).catch((e)=> {
                        console.log(e);
                    })
                },
                update: function (rec) {
                    if (rec._id) {
                        new Recruiter(rec).$save().then((newRec)=> {
                            for (var i = 0; i < recruiterList.length; i++) {
                                if(recruiterList[i]._id == newRec._id) {
                                    recruiterList[i] = newRec;
                                    break;
                                }
                            }
                        });
                    }
                },
                get: function (id) {
                    if(!id) {
                        return recruiterList;
                    }
                    else {
                        return findOne(id);
                    }
                }
            }
        });
})();