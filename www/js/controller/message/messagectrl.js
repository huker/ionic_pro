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
  ]
}
