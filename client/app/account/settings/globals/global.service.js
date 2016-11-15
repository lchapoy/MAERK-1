/**
 * Created by cleverjam on 11/15/16.
 */

(function () {
    angular.module('maerkApp')
        .constant('globalURL', '/api/settings')
        .factory('GlobalResource', function ($resource, globalURL, $q) {
            let Globals = $resource(globalURL + ":id",
                {id: "@_id"},
                {
                    create: {method: "POST"},
                    save: {method: "PUT"}
                });

            let deferred = $q.defer();

            function query() {
                Globals.query().$promise.then(d => {
                    console.log(d);
                    if (d.length > 0)
                        deferred.resolve(d[0]);
                    else
                        deferred.reject(d);
                });
                return deferred.promise;
            }

            return {
                globals: query()  //get the configuration values
            }
        });
})();