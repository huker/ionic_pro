/**
 * Created by huk on 2016/7/21.
 */

angular.module('app.controller')
  .controller('riskCtrl', riskCtrl);

riskCtrl.$inject = ['$state','ajService'];

function riskCtrl(){
  var vm = this;
  vm.showRiskOne = true;
  vm.showRiskTwo= vm.showRiskThd = vm.showRiskFour = vm.showRiskFive = vm.showRiskSix = false;
  vm.nextstep1 = nextstep1;
  vm.nextstep2 = nextstep2;
  vm.nextstep3 = nextstep3;
  vm.nextstep4 = nextstep4;
  vm.nextstep5 = nextstep5;
  vm.nextstep6 = nextstep6;
  //var showArr = [vm.showRiskOne,vm.showRiskTwo,vm.showRiskThd,vm.showRiskFour,vm.showRiskFive,vm.showRiskSix];
  vm.select1 = [
    { text:'6个月以下',value:'q1a'},
    { text:'6个月到1年',value:'q1b'},
    { text:'1年到5年',value:'q1c'},
    { text:'5年以上',value:'q1d'}
  ];
  vm.select2 = [
    { text:'资本增长，赚取稍微比银行存款微高的回报',value:'q2a'},
    { text:'B',value:'q2b'},
    { text:'C',value:'q2c'},
    { text:'D',value:'q2d'}
  ];
  vm.select3 = [
    { text:'3投资经验一般',value:'q3a'},
    { text:'投资经验较丰富',value:'q3b'},
    { text:'投资经验很有限',value:'q3c'},
    { text:'投资经验非常丰富',value:'q3d'}
  ];
  vm.select4 = [
    { text:'4投资经验一般',value:'q4a'},
    { text:'投资经验较丰富',value:'q4b'},
    { text:'投资经验很有限',value:'q4c'},
    { text:'投资经验非常丰富',value:'q4d'}
  ];
  vm.select5 = [
    { text:'5投资经验一般',value:'q5a'},
    { text:'投资经验较丰富',value:'q5b'},
    { text:'投资经验很有限',value:'q5c'},
    { text:'投资经验非常丰富',value:'q5d'}
  ];
  vm.select6 = [
    { text:'6投资经验一般',value:'q6a'},
    { text:'投资经验较丰富',value:'q6b'},
    { text:'投资经验很有限',value:'q6c'},
    { text:'投资经验非常丰富',value:'q6d'}
  ];
  vm.select7 = [
    { text:'7投资经验一般',value:'q7a'},
    { text:'投资经验较丰富',value:'q7b'},
    { text:'投资经验很有限',value:'q7c'},
    { text:'投资经验非常丰富',value:'q3d'}
  ];
  vm.data = {
    riskquestion1:'q1a',
    riskquestion2:'q2a',
    riskquestion3:'q3a',
    riskquestion4:'q4a',
    riskquestion5:'q5a',
    riskquestion6:'q6a',
    riskquestion7:'q7a'
  };
  function nextstep1(){
    vm.showRiskOne = vm.showRiskTwo= vm.showRiskThd = vm.showRiskFour = vm.showRiskFive = vm.showRiskSix = false;
    vm.showRiskTwo = true;
  }
  function nextstep2(){
    vm.showRiskOne = vm.showRiskTwo= vm.showRiskThd = vm.showRiskFour = vm.showRiskFive = vm.showRiskSix = false;
    vm.showRiskThd = true;
  }
  function nextstep3(){
    vm.showRiskOne = vm.showRiskTwo= vm.showRiskThd = vm.showRiskFour = vm.showRiskFive = vm.showRiskSix = false;
    vm.showRiskFour = true;
  }
  function nextstep4(){
    vm.showRiskOne = vm.showRiskTwo= vm.showRiskThd = vm.showRiskFour = vm.showRiskFive = vm.showRiskSix = false;
    vm.showRiskFive = true;
  }
  function nextstep5(){
    vm.showRiskOne = vm.showRiskTwo= vm.showRiskThd = vm.showRiskFour = vm.showRiskFive = vm.showRiskSix = false;
    vm.showRiskSix = true;
  }
  function nextstep6(){

  }

}
