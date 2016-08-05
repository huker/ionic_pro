/**
 * Created by huk on 2016/7/29.
 */
angular.module('app.service')
  .factory('msgService',msgService);

assetService.$inject = ['$http'];

function msgService($http){
  return{
    getmsglist:function(){
      return $http.get('');
    },
    getinvestlist:function(data){
      return $http.post('',data);
    },
    getstrategymsg:function(data){
      return $http.post('',data);
    },
    getbacktest:function(data){
      return $http.post('',data);
    }
  }
}
