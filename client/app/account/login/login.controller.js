'use strict';

class LoginController {
  constructor(Auth, $state) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;

    Auth.isLoggedIn((is)=> {
      console.log(is);
      if (is)
        $state.go("main.employee")
    })

  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('main.employee');
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('maerkApp')
  .controller('LoginController', LoginController);
