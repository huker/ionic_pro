angular.module('app.service')
.factory('ajService',ajService);

ajService.$inject = ['$http','$localStorage'];

function ajService($http,$localStorage){
  function changeUser(user) {
    angular.extend(currentUser, user);
  }
  function urlBase64Decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return window.atob(output);
  }
  function getUserFromToken() {
    var token = $localStorage.token;
    var user = {};
    if (typeof token !== 'undefined') {
      var encoded = token.split('.')[1];
      user = JSON.parse(urlBase64Decode(encoded));
    }
    return user;
  }

  var currentUser = getUserFromToken();

  return {
    toLogin:function(data){
      return $http.post('/api/user/login',data)
    },
    toReg:function(data){
      return $http.post('api/user/register',data)
    },
    tologout:function(success){
      changeUser({});
      delete $localStorage.token;
      success();
    },
    setInvestStyle:function(data){
      return $http.post('',data)
    },
    setRisk:function(data){
      return $http.post('',data);
    }
  }
}
