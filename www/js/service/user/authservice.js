angular.module('app.service')
.factory('authService',authService);

authService.$inject = [];

function authService(){
  var auth = {
    isLogged: false
  };
  return auth;
}

angular.module('app.service')
  .factory('AuthInjector',AuthInjector);

AuthInjector.$inject = ['$q','$location'];

function AuthInjector($q,$location){
  return {
    request: function (config) {
      config.headers = config.headers || {};
      var token = $location.search().token || localStorage.getItem('authorize.token');
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },

    response: function (response) {
      return response || $q.when(response);
    }
  };
}
