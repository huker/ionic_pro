/**
 * Created by huk on 2016/7/23.
 */
angular.module('app.controller')
  .controller('assetCtrl',assetCtrl);
angular.module('app.controller')
  .controller('homeCtrl',homeCtrl);

assetCtrl.$inject = ['$state','assetService'];
homeCtrl.$inject = ['$state','assetService'];

function assetCtrl($state,assetService){
  var vm = this;
  vm.getAsset = getAsset;
  vm.getReturn = getReturn;
  vm.getMonitor = getMonitor;
  vm.showasset = true;
  vm.showreturn = false;
  vm.showmonitor = false;
  //get图表的请求
  vm.getchart = {
    getReturnChart:function(){
      assetService.getReturnChart().success(function(data){
        console.log(data)
      })
    },
    getAssetChart:function(){
      assetService.getAssetChart().success(function(data){
        console.log(data)
      })
    },
    getMonitorChart:function(){
      assetService.getMonitorChart().success(function(data){
        console.log(data)
      })
    }
  };
  //收益率
  function getReturn(){
    vm.showreturn = true;
    vm.showasset = false;
    vm.showmonitor = false;
  }
  //资产配置
  function getAsset(){
    vm.showreturn = false;
    vm.showasset = true;
    vm.showmonitor = false;
  }
  //策略监控
  function getMonitor(){
    vm.showreturn = false;
    vm.showasset = false;
    vm.showmonitor = true;
  }

  //assetChart data
  //vm.legend = ["Berlin", "London",'New York','Tokyo'];
  //vm.item = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //vm.data = [
  //  [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin
  //  [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London
  //  [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York
  //  [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo
  //];
 vm.testdata = {
   "name":["Prd No.1","基准组合"],
    "content": [
      [
        "Prd No.1",
        0,
        1.3274533990400008,
        1.3274533990400008,
        2.0955130207232013,
        2.0955130207232013
      ],
      [
        "基准组合",
        -0.00098521225070347107,
        0,
        0.025024010499038685,
        0.025024010499038685,
        0
      ]
    ],
      "curve": [
       [
        1,
        1.0128094051359093,
        1.0277229650394062,
        1.0277229650394062,
        1.0277229650394062,
        1.0260092227497422,
        1.0250240104990387
      ],
       [
        1.3300000000000001,
        1.7423000000000002,
        1.9513760000000004,
        2.2635961600000005,
        2.5352276992000009,
        2.8141027461120012,
        3.0955130207232013
      ]]
    ,
    "datetime": [
      "2016-06-01",
      "2016-06-02",
      "2016-06-03",
      "2016-06-04",
      "2016-06-05",
      "2016-06-06",
      "2016-06-07"
    ]
  }

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

}

function homeCtrl(){
  var vm = this;
  vm.legend = ["中国股票", "美国股票","现金","CTA","其他"];
  vm.data = [100,100,100,100,100];
  vm.testdata = [
    {
      "name":"中国股票",
      "data":100
    },{
      "name":"美国股票",
      "data":100
    },{
      "name":"现金",
      "data":100
    },{
      "name":"CTA",
      "data":100
    },{
      "name":"其他",
      "data":100
    }
  ]
}
