/**
 * Created by huk on 2016/7/23.
 */

angular.module('app.controller')
  .controller('messageCtrl',messageCtrl);

messageCtrl.$inject = ['$state','msgService'];

function messageCtrl($state,msgService){
  var vm = this;
  vm.select_id = ''; //点击的消息的id
  vm.detailmsg = {}; //获取具体组合信息的参数（消息id和组合id）

  vm.getMsgList = getMsgList;
  vm.getInvestList = getInvestList;
  vm.getStrategyMsg = getStrategyMsg;
  vm.getBacktest = getBacktest;

  //get消息列表 msgList
  function getMsgList(){
    msgService.getmsglist().success(function(data){
      console.log(data);
    })
  }
  //得到投资组合列表 list
  function getInvestList(){
    msgService.getinvestlist(vm.select_id).success(function(data){
      console.log(data);
    })
  }
  //得到具体投资组合信息
  function getStrategyMsg(){
    msgService.getstrategymsg(JSON.stringify(vm.detailmsg)).success(function(data){
      console.log(data);
    })
  }
  //获取回测数据 参数未写
  function getBacktest(){
    msgService.getstrategymsg().success(function(data){
      console.log(data);
    })
  }



  vm.msgList = [
    {"date":"07-23","content":"推荐一个组合A","msg_id":"1"},
    {"date":"07-25","content":"推荐一个组合B","msg_id":"2"},
    {"date":"07-26","content":"推荐一个组合C","msg_id":"3"}
  ];
  vm.list = [
    {"name":"策略一号","money":"50000","msg_id":"1"},
    {"name":"单股票一号","money":"30000","msg_id":"2"},
    {"name":"混合一号","money":"70000","msg_id":"3"}
  ];
  vm.getstrategy = {
    "name":"策略一号",
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
