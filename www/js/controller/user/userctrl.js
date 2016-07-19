angular.module('app.controller')

  .controller('signinCtrl', function (ajService, $state) {
    var arr = {"email": this.email, "pwd": this.password};
    this.login = login;
    function login() {
      var json_data = JSON.stringify(arr);
      ajService.toLogin(json_data).success(function (data) {
        if (data.success) {
          $state.go('tabs.home');
        } else {
          console.log('login err')
        }
      })
    }
  })

  .controller('regCtrl', function (ajService, $state) {
    this.regTest = function () {
      var arr = {
        "email": this.email,
        "pwd": this.pwd,
        "confirm_pwd": this.confirm_pwd
      };
      var json_data = JSON.stringify(arr);
      ajService.toReg(json_data).success(function (data) {
        if (data.success) {
          $state.go('tabs.home');
        } else {
          console.log('reg err');
        }
      })
    }
  })
