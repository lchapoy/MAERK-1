/**
 * Created by cleverjam on 11/9/16.
 */
class RecruiterController {
    constructor(recruiterList, $mdDialog, RecruiterResource) {
        this.Math = window.Math;
        this.mdDialog = $mdDialog;
        this.RecruiterResource = RecruiterResource;
        this.page = 1;
        this.orderVal = "first_name";
        this.limit = 5;
        this.filterBy='first_name';
        this.selected = [];
        this.recruiters = recruiterList;
    }

    showAddDialog($event, selected) {
        this.mdDialog.show({
            controller: "RecruiterDialogController",
            controllerAs: "vm",
            templateUrl: 'app/recruiter/recruiter-dialog/recruiter.dialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            clickOutsideToClose: true,
            fullscreen: true,
            locals: {
                recruiter: selected ? selected[0] : null
            }
        })
            .then(rec => {
                if (!rec._id) {
                    this.RecruiterResource.create(rec);
                }
                else {
                    this.RecruiterResource.update(rec);
                }
            });
    }
}
angular.module('maerkApp')
    .controller('RecruiterController', RecruiterController);