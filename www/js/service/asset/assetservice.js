/**
 * Created by huk on 2016/7/27.
 */
angular.module('app.service')
  .factory('assetService',assetService);

assetService.$inject = ['$http'];

function assetService($http){
  return {
    getAssetChart:function(data){
      return $http.get('')
    },
    getReturnChart:function(data){
      return $http.get('')
    },
    getMonitorChart:function(data){
      return $http.get('')
    }
  }
}
