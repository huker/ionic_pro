/**
 * Created by huk on 2016/7/25.
 */

angular.module('app.controller')
  .controller('centerCtrl',centerCtrl);

centerCtrl.$inject = ['$state','ajService','$ionicActionSheet'];

function centerCtrl($state,ajService,$ionicActionSheet){
  var vm = this;
  vm.selectImg = selectImg;
  vm.userdata = {
    "username":"huker",
    "date":"100",
    "returnrate":"5%-8%",
    "maxloss":"5%-10%",
    "scale":"100000",
    "account":"true",
    "auto":"true",
    "percent":"20%",
    "round":"3",
    "risk":"平衡型",
    "tel":"18862005793",
    "email":"xxx@sina.com"
  };
  function selectImg(){
    var hideSheet = $ionicActionSheet.show({
      buttons: [{
        text: '相册'
      }, {
        text: '拍照'
      }
      ],
      titleText: '选择图片',
      cancelText: '取消',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        navigator.camera.getPicture(cameraSuccess, cameraError, {
          sourceType: index
        }); //调用系统相册、拍照
      }
    });
  }
}
