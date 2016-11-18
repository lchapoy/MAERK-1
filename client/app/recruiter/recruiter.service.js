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

            function findOne(idOrName) {
                if (idOrName && recruiterList) {
                    for (var i = 0; i < recruiterList.length; i++) {
                        if ((recruiterList[i]._id === idOrName) || ((recruiterList[i].first_name + ' ' +recruiterList[i].last_name) === idOrName)) {
                            return recruiterList[i];
                        }
                    }
                    return {};
                }
            }

            return {
                recruiters: recruiterList,
                delete: function () {

                },
                find: findOne,
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
                get: function (name) {
                    if(!name) {
                        return recruiterList;
                    }
                    else {
                        return findOne(name);
                    }
                }
            }
        });
})();