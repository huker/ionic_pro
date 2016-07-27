angular.module('app.service')
.factory('authService',authService);

authService.$inject = ['$localStorage'];

function authService($localStorage){
  return {
    setAuthority:function setAuthority(){

    },
    getAuthority:function getAuthority(){

    },
    getAuthStatus:function getAuthStatus(){

    },
    removeAuthInfo:function removeAuthInfo(){

    }
  };

}
