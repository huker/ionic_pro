angular.module('app.controller',[])

.controller('loginCtrl',function($scope,ajService){
  $scope.loginTest = function(){
    var arr = {"email":$scope.email,"pwd":$scope.password};
    var json_data = JSON.stringify(arr);
    ajService.toLogin(json_data).success(function(data){
      if(data.success){
        console.log('login ok')
      }else{
        console.log('login err')
      }
    })
  }
})

.controller('regCtrl',function($scope,ajService){
  $scope.regTest = function(){
    var arr = {
      "email":$scope.email,
      "pwd":$scope.pwd,
      "confirm_pwd":$scope.confirm_pwd};
    var json_data = JSON.stringify(arr);
    ajService.toReg(json_data).success(function(data){
      console.log(data)
    })
  }
})
