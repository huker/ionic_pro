angular.module('app.controller')
  .controller('slideCtrl',slideCtrl);

slideCtrl.$inject = ['$state'];

function slideCtrl($state){
  this.tologin = function(){
    $state.go('login')
  }
  this.toreg = function(){
    $state.go('register')
  }
  this.tohome = function(){
    $state.go('tabs.center')
  }
}







