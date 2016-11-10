/**
 * Created by cleverjam on 11/10/16.
 */
(function () {
    class RecruiterDialogController {
        constructor(recruiter, $mdDialog) {
            this.context = "Add"; //default dialog context.
            this.recruiter = {};
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

            this.submit = function () {
                if (this.commissionType == 'percentage') {
                    this.recruiter.amount_per_hired = (this.recruiter.amount_per_hired / 100).toFixed(3);
                }
                $mdDialog.hide(this.recruiter);
            };
            this.close = function () {
                $mdDialog.cancel();
            };
        }

    }
    angular.module('maerkApp')
        .controller('RecruiterDialogController', RecruiterDialogController);
})();