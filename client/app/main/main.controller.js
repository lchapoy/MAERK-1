'use strict';

(function() {

  class MainController {

    constructor($http, $state, Auth) {
      this.$http = $http;
      this.awesomeThings = [];
      if(!Auth.isLoggedIn())
        $state.go("login");
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('maerkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
