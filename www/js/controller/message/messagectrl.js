/**
 * Created by huk on 2016/7/23.
 */

angular.module('app.controller')
  .controller('messageCtrl',messageCtrl);

messageCtrl.$inject = ['$state','ajService'];

function messageCtrl($state,ajService){
  var vm = this;
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
