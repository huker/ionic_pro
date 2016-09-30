/**
 * Created by huk on 2016/7/23.
 */

angular.module('app.controller')
  .controller('messageCtrl',messageCtrl);

messageCtrl.$inject = ['$state','msgService','$ionicPopup','$scope'];

function messageCtrl($state,msgService,$ionicPopup,$scope){
  var vm = this;
  vm.detailmsg = {}; //获取具体组合信息的参数（消息id和组合id）
  vm.detailList = {};
 	/**
   * api define
   */
  vm.getMsgList = getMsgList;
  vm.getInvestList = getInvestList;
  vm.getStrategyMsg = getStrategyMsg;
  vm.getBacktest = getBacktest;
  vm.select = {
    currentActivity:"IB",
    name:"select",
    money:""
  };
  vm.activities= [
    "IB","南华期货","SAXO","iFAST"
  ]

  /**
   * 功能
   * readMsg 消息阅读跳转
   * strategyDetail 消息中的组合策略跳转
   */
  vm.readMsg = readMsg;
  vm.strategyDetail = strategyDetail;
  vm.gotoTrade = gotoTrade;
  vm.tradeConfirm = tradeConfirm;

  function readMsg(id){
    $state.go('tabs.msgdetail');
    var msg_id = {"msg_id":id};
    getInvestList(msg_id);
  }
  function strategyDetail(id){
    $state.go('tabs.msgpage');
    var strategy_id = {"strategy_id":id};
    getStrategyMsg(strategy_id);
  }
  function gotoTrade(select){
      var myPop = $ionicPopup.show({
      title:"交易确认",
      template: '<label for="name">输入金额（元）:</label><input type="text" ng-model="message.select.money" placeholder="100000"><div>'+
      '<label for="name">选择交易账户:</label>'+
    '<select ng-model="message.select.currentActivity" class="form-control" ng-options="act for act in message.activities">'+
      '</select></div>',
      scope:$scope,
      buttons: [
        {
          text:'<b>取消</b>',
          type:'button-energized'
        },
        {
          text: '<b>确认交易</b>',
          type: 'button-positive',
          onTap: function(e) {
            tradeConfirm(vm.select.currentActivity,vm.select.money);
          }
        },
      ]
    })
    myPop.then(function(){

    });
    console.log(select)
  }
  function tradeConfirm(select,money){
    console.log(arguments)
  }
  //get消息列表 msgList
  function getMsgList(){
    msgService.getmsglist().success(function(data){
      //console.log(data);
    })
  }
  //得到投资组合列表 list
  function getInvestList(select_id){
    msgService.getinvestlist(select_id).success(function(data){
      //console.log(data);
    })
  }
  //得到具体投资组合信息
  function getStrategyMsg(strategy_id){
    msgService.getstrategymsg(strategy_id).success(function(data){
      //console.log(data);
    })
  }
  //获取回测数据 参数未写
  function getBacktest(){
    msgService.getstrategymsg().success(function(data){
      console.log(data);
    })
  }



  vm.msgList = [
    {"date":"07-23 11:11","content":"推荐一个组合A","investmanager":"QStrategy","msg_id":"1","url":"./","read":true},
    {"date":"07-25 11:11","content":"推荐一个组合B","investmanager":"QStrategy","msg_id":"2","url":"./","read":true},
    {"date":"07-26 11:11","content":"推荐一个组合C","investmanager":"QStrategy","msg_id":"3","url":"./","read":false}
  ];
  vm.detailList = {
    "list":[
      {"checked":true,"category":"混合型","name":"策略一号","money":"50000","strategy_id":"1","forest_r":20.88,"forest_risk":10.88},
      {"checked":false,"category":"混合型","name":"单股票一号","money":"30000","strategy_id_id":"2","forest_r":20.88,"forest_risk":10.88},
      {"checked":false,"category":"混合型","name":"混合一号","money":"70000","strategy_id_id":"3","forest_r":20.88,"forest_risk":10.88}
    ],
    "investmanager":"QStrategy"
  };
  vm.getstrategy = {
    "name":"策略一号",
    "strategy_id":"576b4d3c34ab5509ad5a7c2e",
    "money":"50000",
    "returnrate":"20%",
    "volatility":"10%",
    "risk":"xxx",
    "send":"QStrategy",
    "leavemsg":"这是我为您选出的投资组合"
  };
  vm.strategy = {
    "name":"策略一号",
    "money":"50000",
    "returnrate":"20%",
    "legend":["中国黄金", "中国股票","中国基金","美国股票","外币篮子"],
    "data":[335,310,234,444,236],
    "strategyData": [{
      "category":"中国股票",
      "detailcategory":"金融行业",
      "share":"1000",
      "rate":"10%"
    },
      {
        "category":"中国股票",
        "detailcategory":"科技行业",
        "share":"1000",
        "rate":"10%"
      }
    ]

  }
}
