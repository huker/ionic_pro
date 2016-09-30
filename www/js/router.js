angular.module('app.routes',[])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract:true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.home',{
        url:"/home",
        views:{
          'home-tab':{
            templateUrl:"templates/home.html"
          }
        }
      })
      .state('tabs.login',{
        url:"/login",
        views:{
          'home-tab':{
            templateUrl:"templates/user/login.html"
          }
        }
      })
      .state('tabs.register',{
        url:"/register",
        views:{
          'home-tab':{
            templateUrl:"templates/user/register.html"
          }
        }
      })
      .state('tabs.about',{
        url:"/about",
        views:{
          'about-tab':{
            templateUrl:"templates/about.html"
          }
        }
      })

    $urlRouterProvider.otherwise("/tab/home");
  })
