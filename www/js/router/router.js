angular.module('app.routes',[])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract:true,
        templateUrl: "templates/tabs.html",
        //controller: "tabCtrl as tab"
      })
      .state('slide',{
        url:'/slide',
        templateUrl: "templates/slide.html",
        controller: "slideCtrl as slide"
      })
      .state('tabs.home',{
        url:"/home",
        views:{
          'home-tab':{
            templateUrl:"templates/home.html",
            //controller: "homeCtrl as home"
          }
        }
      })
      .state('tabs.login',{
        url:"/login",
        views:{
          'home-tab':{
            templateUrl:"templates/user/login.html",
            controller: "loginCtrl as login"
          }
        }
      })
      .state('tabs.register',{
        url:"/register",
        views:{
          'home-tab':{
            templateUrl:"templates/user/register.html",
            controller: "regCtrl as reg"
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

    $urlRouterProvider.otherwise("/slide");
  })
