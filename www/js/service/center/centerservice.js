/**
 * Created by huk on 2016/8/24.
 */
angular.module('app.service')
  .factory('centerService',centerService);

centerService.$inject = ['$http'];

function centerService($http){
  return{
    getUserInfo:function(){
      return $http.get('');
    },


  }
}
