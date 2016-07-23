/**
 * Created by huk on 2016/7/23.
 */
angular.module('app.controller')
  .controller('assetCtrl',assetCtrl);

assetCtrl.$inject = ['$state','ajService'];

function assetCtrl($state,ajService){
  var vm = this
  vm.getAsset = getAsset;
  vm.getReturn = getReturn;
  vm.getMonitor = getMonitor;
  vm.showasset = true;
  vm.showreturn = false;
  vm.showmonitor = false;

  //assetChart data
  vm.legend = ["Berlin", "London",'New York','Tokyo'];
  vm.item = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  vm.data = [
    [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin
    [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London
    [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York
    [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo
  ];

  //returnChart data
  vm.legend2 = ["主板股票", "国内基金","美国股票"];
  vm.data2 = [335,310,234];

  vm.reutrnData = [
    {
      "category":"国内股票",
      "returnrate":"2%"
    },{
      "category":"国内FoF",
      "returnrate":"2%"
    },{
      "category":"美国股票",
      "returnrate":"2%"
    },{
      "category":"海外FoF",
      "returnrate":"2%"
    },{
      "category":"国内MoM",
      "returnrate":"2%"
    }
  ];

  //minitor data
  vm.legend3 = ["混合一号", "混合二号","单资产策略1号"];
  vm.data3 = [335,310,234];

  vm.monitorData = [
    {
      "category":"单资产策略",
      "strategy":"股票一号",
      "returnrate":"2%"
    },{
      "category":"混合资产策略",
      "strategy":"混合一号",
      "returnrate":"2%"
    },{
      "category":"混合资产策略",
      "strategy":"混合二号",
      "returnrate":"2%"
    }
  ];
  function getAsset(){
    vm.showreturn = false;
    vm.showasset = true;
    vm.showmonitor = false;
  }
  function getReturn(){
    vm.showreturn = true;
    vm.showasset = false;
    vm.showmonitor = false;
  }
  function getMonitor(){
    vm.showreturn = false;
    vm.showasset = false;
    vm.showmonitor = true;
  }
}
