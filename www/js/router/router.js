angular.module('app.routes')
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
      .state('tabs.risk',{
        url:"/risk",
        views:{
          'home-tab':{
            templateUrl:"templates/user/risk.html",
            controller: "riskCtrl as risk"
          }
        }
      })
      .state('tabs.account',{
        url:"/account",
        views:{
          'home-tab':{
            templateUrl:"templates/user/openaccount.html",
            controller: "accountCtrl as account"
          }
        }
      })
      .state('tabs.asset',{
        url:"/asset",
        views:{
          'home-tab':{
            templateUrl:"templates/asset/asset.html",
            controller: "assetCtrl as asset"
          }
        }
      })
      .state('tabs.message',{
        url:"/message",
        views:{
          'message-tab':{
            templateUrl:"templates/message/message.html",
            controller: "messageCtrl as message"
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
