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
      //首页界面下的page
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
        url:"/home/login",
        views:{
          'home-tab':{
            templateUrl:"templates/user/login.html",
            controller: "loginCtrl as login"
          }
        }
      })
      .state('tabs.register',{
        url:"/home/register",
        views:{
          'home-tab':{
            templateUrl:"templates/user/register.html",
            controller: "regCtrl as reg"
          }
        }
      })
      .state('tabs.investstyle',{
        url:"/home/register/investstyle",
        views:{
          'home-tab':{
            templateUrl:"templates/user/investstyle.html",
            controller: "regCtrl as reg"
          }
        }
      })
      .state('tabs.risk',{
        url:"/home/register/investstyle/risk",
        views:{
          'home-tab':{
            templateUrl:"templates/user/risk.html",
            controller: "riskCtrl as risk"
          }
        }
      })
      .state('tabs.account',{
        url:"/home/register/investstyle/risk/account",
        views:{
          'home-tab':{
            templateUrl:"templates/user/openaccount.html",
            controller: "accountCtrl as account"
          }
        }
      })
      .state('tabs.asset',{
        url:"/home/asset",
        views:{
          'home-tab':{
            templateUrl:"templates/asset/asset.html",
            controller: "assetCtrl as asset"
          }
        }
      })
      //message页面下的page
      .state('tabs.message',{
        url:"/message",
        views:{
          'message-tab':{
            templateUrl:"templates/message/message.html",
            controller: "messageCtrl as message"
          }
        }
      })
      .state('tabs.msgdetail',{
        url:"/message/msgdetail",
        views:{
          'message-tab':{
            templateUrl:"templates/message/msgdetail.html",
            controller: "messageCtrl as message"
          }
        }
      })
      .state('tabs.contact',{
        url:"/message/contact",
        views:{
          'message-tab':{
            templateUrl:"templates/message/contact.html",
            controller: "contactCtrl as contact"
          }
        }
      })
      .state('tabs.trade',{
        url:"/message/trade",
        views:{
          'message-tab':{
            templateUrl:"templates/message/trade.html",
            controller: "messageCtrl as message"
          }
        }
      })
      .state('tabs.msgpage',{
        url:"/message/msgdetail/msgpage",
        views:{
          'message-tab':{
            templateUrl:"templates/message/msgdetailpage.html",
            controller: "messageCtrl as message"
          }
        }
      })
      .state('tabs.msgstrategy',{
        url:"/message/msgdetail/msgpage/msgstrategy",
        views:{
          'message-tab':{
            templateUrl:"templates/message/msgstrategy.html",
            controller: "messageCtrl as message"
          }
        }
      })
      .state('tabs.center',{
        url:"/center",
        views:{
          'center-tab':{
            templateUrl:"templates/center/personal.html",
            controller: "centerCtrl as center"
          }
        }
      })
    $urlRouterProvider.otherwise("/slide");

  })
