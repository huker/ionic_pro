angular.module('app.controller')
  .controller('loginCtrl', loginCtrl);

angular.module('app.controller')
  .controller('regCtrl', regCtrl);


loginCtrl.$inject = ['ajService', '$state', '$ionicPopup','$localStorage'];
regCtrl.$inject = ['ajService', '$state', '$ionicPopup','$localStorage'];


function loginCtrl(ajService, $state, $ionicPopup,$localStorage) {
  var vm = this;
  vm.loginmsg = {};
  vm.login = login;
  vm.toreg = gotoreg;
  function login() {
    var json = JSON.stringify(vm.loginmsg);
    ajService.toLogin(json).success(function (data) {
      if (data.success) {
        $localStorage.token = data.data.token;
        $state.go('tabs.home');
      } else {
        $ionicPopup.alert({
          title: '提示',
          template: '账号/密码错误，请重新填写信息'
        });
      }
    })
  }
  function gotoreg(){
    $state.go('register')
  }
  vm.token = $localStorage.token
}

function regCtrl(ajService, $state, $ionicPopup,$localStorage) {
  var vm = this;
  vm.regmsg = {};
  vm.toreg = toreg;
  vm.gotologin = gotologin;
  vm.test = test;
  vm.gotoRisk = gotoRisk;
  vm.select1 = [
    { text: "3%-5%", value: "one" },
    { text: "5%-8%", value: "two" },
    { text: "8%-15%", value: "three" },
    { text: "15以上%", value: "four" }
  ];
  vm.select2 = [
    { text: "5%以下", value: "one" },
    { text: "5%-10%", value: "two" },
    { text: "10%-20%", value: "three" },
    { text: "20以上%", value: "four" }
  ];
  vm.select3 = [
    { text: "是", value: "true" },
    { text: "否", value: "false" }
  ];
  vm.data = {
    clientSide1:'one',
    clientSide2:'one',
    clientSide3:'true',
    earnPercent:''
  };

  function test(){
    $state.go('investstyle');
  }
  function gotoRisk(){
    $state.go('riskenter');
  }
  function gotologin(){
    $state.go('login')
  }
  function toreg() {
    var json = JSON.stringify(vm.regmsg);
    ajService.toReg(json).success(function (data) {
      if (data.success) {
        $localStorage.token = data.data.token;
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
  vm.token = $localStorage.token;
}



