angular.module('app.controller')

  .controller('slideCtrl',function($state){
    this.toHome = function(){
      $state.go('tabs.home')
    }
  })



