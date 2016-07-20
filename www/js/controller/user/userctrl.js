angular.module('app.controller')
  .controller('loginCtrl', loginCtrl);

angular.module('app.controller')
  .controller('regCtrl', regCtrl);

loginCtrl.$inject = ['ajService', '$state', '$ionicPopup'];
regCtrl.$inject = ['ajService', '$state', '$ionicPopup'];

function loginCtrl(ajService, $state, $ionicPopup) {
  this.loginmsg = {};
  this.login = login;
  function login() {
    var json = JSON.stringify(this.loginmsg);
    ajService.toLogin(json).success(function (data) {
      if (data.success) {
        $state.go('tabs.home');
      } else {
        $ionicPopup.alert({
          title: '提示',
          template: '登陆失败重新填写信息'
        });
      }
    })
  }
}

function regCtrl(ajService, $state, $ionicPopup) {
  this.regmsg = {};
  this.reg = reg;
  function reg() {
    var json = JSON.stringify(this.regmsg);
    ajService.toReg(json).success(function (data) {
      if (data.success) {
        $state.go('tabs.home');
      } else if (data.errorCode == 8004) {
        $ionicPopup.alert({
          title: '提示',
          template: '账户格式不正确'
        });
      } else if (data.errorCode == 70009) {
        $ionicPopup.alert({
          title: '提示',
          template: '密码太简单请重新填写'
        });
      } else if (data.errorCode == 70003) {
        $ionicPopup.alert({
          title: '提示',
          template: '该账户已注册'
        });
      } else if (data.errorCode == 70002) {
        $ionicPopup.alert({
          title: '提示',
          template: '两次密码输入不同'
        });
      }
    })

  }
}

