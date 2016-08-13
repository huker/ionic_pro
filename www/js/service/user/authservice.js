angular.module('app.service')
  .factory('UserInterceptor',UserInterceptor);

UserInterceptor.$inject = ['$q','$location','$localStorage'];

function UserInterceptor($q,$location,$localStorage){
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($localStorage.token) {
        config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    },

    //response: function (response) {
    //  return response || $q.when(response);
    //},
    responseError: function(response){
      if(response.status === 401 || response.status === 403){
        $location.path('/login');
      }
      return $q.reject(response);
    }
  };
}
