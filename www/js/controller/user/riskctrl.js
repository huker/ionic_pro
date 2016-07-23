/**
 * Created by huk on 2016/7/21.
 */

angular.module('app.controller')
  .controller('riskCtrl', riskCtrl);

riskCtrl.$inject = ['$scope','$state','ajService','$ionicPopup'];

function riskCtrl($scope,$state,ajService,$ionicPopup){
  var vm = this;
  vm.nowstep = 0;
  vm.showRisk = 1;   //进度条
  vm.nextstep = nextstep;
  vm.prevstep = prevstep;
  vm.getValue = getValue;
  vm.checkOver = checkOver;
  vm.hideprev = true;
  vm.riskCheckedArr = {
    "select1":"",
    "select2":"",
    "select3":"",
    "select4":"",
    "select5":"",
    "select6":"",
    "select7":""
  };
  vm.riskquestion = '';
  vm.book = {
    "select1":[
      { "text":"6个月以下","value":"a1"},
      { "text":"6个月到1年","value":"b1"},
      { "text":"1年到5年","value":"c1"},
      { "text":"5年以上","value":"d1"}
    ],
    "select2":[
      { "text":"资本增长，赚取稍微比银行存款微高的回报","value":"a2"},
      { "text":"B","value":"b2"},
      { "text":"C","value":"c2"},
      { "text":"D","value":"d2"}
    ],
    "select3":[
      { "text":"3投资经验一般","value":"a3"},
      { "text":"3投资经验较丰富","value":"b3"},
      { "text":"投资经验很有限","value":"c3"},
      { "text":"投资经验非常丰富","value":"d3"}
    ],
    "select4":[
      { "text":"4投资经验一般","value":"a4"},
      { "text":"4投资经验较丰富","value":"b4"},
      { "text":"投资经验很有限","value":"c4"},
      { "text":"投资经验非常丰富","value":"d4"}
    ],
    "select5":[
      { "text":"5投资经验一般","value":"a5"},
      { "text":"5投资经验较丰富","value":"b5"},
      { "text":"投资经验很有限","value":"c5"},
      { "text":"投资经验非常丰富","value":"d5"}
    ],
    "select6":[
      { "text":"6投资经验一般","value":"a6"},
      { "text":"6投资经验较丰富","value":"b6"},
      { "text":"投资经验很有限","value":"c6"},
      { "text":"投资经验非常丰富","value":"d6"}
    ],
    "select7":[
      { "text":"7投资经验一般","value":"a7"},
      { "text":"7投资经验较丰富","value":"b7"},
      { "text":"投资经验很有限","value":"c7"},
      { "text":"投资经验非常丰富","value":"d7"}
    ]
  };
  //$scope.$watch('vm.nowstep',function(newVal,oldVal){
  //  console.log(vm.nowstep);
  //  console.log(newVal,oldVal)
    //if(newVal == 1 || newVal == 0){
    //  vm.hideprev = true;
    //}else{
    //  vm.hideprev = false;
    //}
  //});
  nextstep();
  //写入value进json
  function getValue(){
    var step = "select"+vm.nowstep;
    vm.riskCheckedArr[step] = vm.riskquestion;
    console.log(vm.riskCheckedArr)
  }
  //下一题
  function nextstep(){
    if(vm.nowstep==0){
      vm.hideprev = true;
    }else{
      vm.hideprev = false;
    }
    if(vm.nowstep<7){
      vm.showRisk = vm.nowstep+1;
      var step = "select"+(vm.nowstep+1);
      vm.select = vm.book[step];
      console.log(step);
      if(vm.riskCheckedArr[step]){
        vm.riskquestion = vm.riskCheckedArr[step]
      }
      vm.nowstep++;
    }else{
      checkOver();
    }
  }
  //上一题
  function prevstep(){
    // stepTo是将切换的select，先把现在的数据写入，再读切换的选项的选中
    if(vm.nowstep>1){
      vm.nowstep--;
      if(vm.nowstep==1){
        vm.hideprev = true;
      }else{
        vm.hideprev = false;
      }
      vm.showRisk = vm.nowstep;
      var stepTo = "select"+vm.nowstep;
      vm.select = vm.book[stepTo];
      vm.riskquestion = vm.riskCheckedArr[stepTo]
    }
  }
  //检查是否全做完
  function checkOver(){
    for(var i in vm.riskCheckedArr){
      var blankitems = 0;
      if(vm.riskCheckedArr[i] == ''){
        blankitems++;
        $ionicPopup.alert({
          title: '提示',
          template: '题目没有做完'
        });
        break;
      }
      if(i == 'select7'){
        if(blankitems == 0){
          $state.go('tabs.account');
        }
      }
    }
  }
}
