angular.module('app.service')
.factory('ajService',ajService);

ajService.$inject = ['$http'];

function ajService($http){
  return {
    toLogin:function(data){
      return $http.post('/api/user/login',data)
    },
    toReg:function(data){
      return $http.post('api/user/register',data)
    },
    setInvestStyle:function(data){
      return $http.post('',data)
    },
    setRisk:function(data){
      return $http.post('',data);
    }
  }
}
