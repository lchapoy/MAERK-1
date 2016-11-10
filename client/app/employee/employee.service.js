/**
 * Created by cleverjam on 10/27/16.
 */
(function () {
    angular.module("maerkApp")
        .constant("employeeURL", "/api/employees/")
        .factory("EmployeeResource", function ($resource, employeeURL, $q) {
            var Employee = $resource(employeeURL + ":id",
                {id: "@_id"},
                {
                    create: {method: "POST"},
                    save: {method: "PUT"}
                });

            var deferred = $q.defer();
            var employeeList = deferred.promise;

            Employee.query().$promise.then((data)=> {
                var res = [];
                data.forEach((elem)=> {
                    if (!elem.deleted)
                        res.push(elem);
                });
                deferred.resolve(res)
            });


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
                employees: employeeList,

                delete: function (emp) {
                    emp.deleted = true;
                    emp.$save();
                    var deferred = $q.defer();
                    employeeList.then((data)=> {
                        data.forEach((e, i)=> {
                            if (e.deleted)
                                data.splice(i, 1);
                        });
                        deferred.resolve(data);
                    });
                    return deferred.promise;

                },
                create: function (emp) {
                    new Employee(emp).$create().then( (newEmp)=> {
                        employeeList.push(newEmp);
                    }).catch(()=>{
                        console.log("Not saved.")
                    })
                },
                update: function (emp) {
                    if (emp._id) {
                        new Employee(emp).$save().then((newEmp) => {
                            for (var i = 0; i < employeeList.length; i++) {
                                if (employeeList[i]._id == newEmp._id) {
                                    employeeList[i] = newEmp;
                                    break;
                                }
                            }

                        })
                    }
                },
                get: function (id) {
                    if (!id) {
                        return employeeList;
                    }
                    else {
                        return findOne(id);
                    }
                }
            }
        });
})();