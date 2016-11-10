/**
 * Created by cleverjam on 11/10/16.
 */
(function () {
    class RecruiterDialogController {
        constructor(recruiter, $mdDialog, $q) {
            this.context = "Add"; //default dialog context.
            this.recruiter = {};
            this.deferred = $q.defer();
            this.commissionType = "percentage";
            if (recruiter) {
                this.context = "Edit";
                angular.copy(recruiter, this.recruiter);
                if (this.recruiter.amount_per_hired < 1) {
                    this.recruiter.amount_per_hired = (this.recruiter.amount_per_hired * 100).toFixed(1);
                }
                else {
                    this.commissionType = "dollar";
                }
            }

            this.submit = function ($event) {
                $event.preventDefault();
                this.deferred.promise.then(()=> {
                    if (this.commissionType == 'percentage') {
                        this.recruiter.amount_per_hired = (this.recruiter.amount_per_hired / 100).toFixed(3);
                    }
                    $mdDialog.hide(this.recruiter);
                }).catch(()=> {
                    console.log('nothing happens');
                    this.deferred = $q.defer();
                });
            };
            this.close = function () {
                $mdDialog.cancel();
            };
        }

    }

    angular.module('maerkApp')
        .controller('RecruiterDialogController', RecruiterDialogController);
})();