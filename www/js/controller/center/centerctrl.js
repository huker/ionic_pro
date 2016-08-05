/**
 * Created by huk on 2016/7/25.
 */

angular.module('app.controller')
  .controller('centerCtrl',centerCtrl);

centerCtrl.$inject = ['$state','ajService','$ionicActionSheet'];

function centerCtrl($state,ajService,$ionicActionSheet){
  var vm = this;
  vm.selectImg = selectImg;
  vm.img = '../../img/ionic.png';
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
  function cameraSuccess(img) {
    $scope.img = img;//这里返回的img是选择的图片的地址，可以直接赋给img标签的src，就能显示了
    window.resolveLocalFileSystemURL(img, function success(fileEntry) {
      upload(fileEntry.toInternalURL());//将获取的文件地址转换成file transfer插件需要的绝对地址
    }, function() {
      alert("上传失败");
    });
  }

  function cameraError(img) {
    alert("上传失败");
  }

  function upload(fileURL) {//上传图片
    var win = function(r) {//成功回调方法
      var response = JSON.parse(r.response);//你的上传接口返回的数据
      if(response.datas.state){
        alert("修改成功");
      }else {
        alert(response.datas.error);
      }
    }
    var fail = function(error) {//失败回调方法
      alert("上传失败");
    }

    var options = new FileUploadOptions();
    options.fileKey = "pic";//这是你的上传接口的文件标识，服务器通过这个标识获取文件
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "image/gif";//图片

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI('uploadurl'), win, fail, options);//开始上传，uoloadurl是你的上传接口地址
  }


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
  vm.nowTradeData = [{
    "name":"混合一号",
    "date":"2016/07/01",
    "money":"100000",
    "account":"盛宝银行"
  },
    {
      "name":"基金一号",
      "date":"2016/07/06",
      "money":"50000",
      "account":"ifast"
    }
  ];
}
