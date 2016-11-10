/**
 * Created by cleverjam on 11/10/16.
 */
class ConfirmController {
    constructor($mdToast, $element) {
        var form = $element[0].parentNode;
        $element.on('click', ()=> {
            console.log('confirm');
            $mdToast.show({
                templateUrl: 'components/confirm/confirm.html',
                hideDelay: 0,
                locals: { action: this.action, deferred: this.deferred},
                parent: form,
                controller: function () {
                    this.confirm = function () {
                        this.deferred.resolve();
                        $mdToast.hide();
                    };
                    this.cancel = function() {
                        this.deferred.reject();
                        $mdToast.hide();
                    }
                },
                controllerAs: 'vm',
                bindToController: true
            });
        })
    }
}
angular.module('maerkApp')
    .controller('ConfirmController', ConfirmController);