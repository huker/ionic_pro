angular.module('app.service')
.factory('ajService',function($http){
  return {
    toLogin:function(data){
      return $http.post('/api/user/login',data)
    },
    toReg:function(data){
      return $http.post('api/user/register',data)
    },
    //getRiskList:function(){
    //  return $http.get('data.json');
    //}
  }
})
