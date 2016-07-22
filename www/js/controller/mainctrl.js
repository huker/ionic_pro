angular.module('app.controller')
  .controller('slideCtrl',slideCtrl);

slideCtrl.$inject = ['$state'];

function slideCtrl($state){
  this.toHome = function(){
    $state.go('tabs.home')
  }
}







