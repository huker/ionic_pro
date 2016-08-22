/**
 * Created by huk on 2016/7/23.
 */

angular.module('app.controller')
.controller('accountCtrl',accountCtrl);

accountCtrl.$inject = ['$state','ajService'];

function accountCtrl($state,ajService){
  var vm = this;
  vm.openifast = openifast;
  vm.opennanhua = opennanhua;
  vm.gotoId = gotoId;
  vm.gotoInfo = gotoInfo;
  function gotoInfo(){
    $state.go('account_info');
  }
  function gotoId(){
    $state.go('account_id');
  }
  function openifast(){
    window.open('http://www.baidu.com', '_system');
  }
  function opennanhua(){
    window.open('http://www.baidu.com', '_system');
  }

}
