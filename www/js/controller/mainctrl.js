angular.module('app.controller')

  .controller('homeCtrl',function($ionicPopup){
    this.showAlert = function(){
      var alertPopup = $ionicPopup.alert({
        title: '提示',
        template: '测试提示框'
      });
      alertPopup.then(function(res) {
        console.log('return');
      });
    }
  })

  .controller('slideCtrl',function($state){
    this.toHome = function(){
      $state.go('tabs.home')
    }
  })



