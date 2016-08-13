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
      //.state('tabs.home',{
      //  url:"/home",
      //  views:{
      //    'home-tab':{
      //      templateUrl:"templates/home.html",
      //      //controller: "homeCtrl as home"
      //    }
      //  }
      //})
      .state('login',{
        url:"/login",
        templateUrl:"templates/user/login.html",
        controller: "loginCtrl as login"
      })
      .state('register',{
        url:"/register",
        templateUrl:"templates/user/register.html",
        controller: "regCtrl as reg"
      })
      .state('investstyle',{
        url:"/register/investstyle",
        templateUrl:"templates/user/investstyle.html",
        controller: "regCtrl as reg"
      })
      .state('riskenter',{
        url:"/register/investstyle/riskenter",
        templateUrl:"templates/user/enterrisk.html",
        controller: "riskCtrl as risk"
      })
      .state('risk',{
        url:"/register/investstyle/riskenter/risk",
        templateUrl:"templates/user/risk.html",
        controller: "riskCtrl as risk"
      })
      .state('account',{
        url:"/register/investstyle/riskenter/risk/account",
        templateUrl:"templates/user/openaccount.html",
        controller: "accountCtrl as account"
      })
      //.state('tabs.login',{
      //  url:"/home/login",
      //  views:{
      //    'home-tab':{
      //      templateUrl:"templates/user/login.html",
      //      controller: "loginCtrl as login"
      //    }
      //  }
      //})
      //.state('tabs.register',{
      //  url:"/home/register",
      //  views:{
      //    'home-tab':{
      //      templateUrl:"templates/user/register.html",
      //      controller: "regCtrl as reg"
      //    }
      //  }
      //})
      //.state('tabs.investstyle',{
      //  url:"/home/register/investstyle",
      //  views:{
      //    'home-tab':{
      //      templateUrl:"templates/user/investstyle.html",
      //      controller: "regCtrl as reg"
      //    }
      //  }
      //})
      //.state('tabs.risk',{
      //  url:"/home/register/investstyle/risk",
      //  views:{
      //    'home-tab':{
      //      templateUrl:"templates/user/risk.html",
      //      controller: "riskCtrl as risk"
      //    }
      //  }
      //})
      //.state('tabs.account',{
      //  url:"/home/register/investstyle/risk/account",
      //  views:{
      //    'home-tab':{
      //      templateUrl:"templates/user/openaccount.html",
      //      controller: "accountCtrl as account"
      //    }
      //  }
      //})

      //主页 资产
      .state('tabs.home',{
        url:"/home",
        views:{
          'home-tab':{
            templateUrl:"templates/asset/home.html",
            controller: "homeCtrl as home"
          }
        }
      })
      .state('tabs.assetreturn',{
        url:"/home/assetreturn",
        views:{
          'home-tab':{
            templateUrl:"templates/asset/assetreturn.html",
            controller: "assetCtrl as asset"
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
      .state('tabs.assetstrategy',{
        url:"/home/assetstrategy",
        views:{
          'home-tab':{
            templateUrl:"templates/asset/assetstrategy.html",
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
      .state('tabs.msgbacktest',{
        url:"/message/msgdetail/msgpage/msgstrategy/msgbacktest",
        views:{
          'message-tab':{
            templateUrl:"templates/message/msgbacktest.html",
            controller: "messageCtrl as message"
          }
        }
      })
      //个人中心
      .state('tabs.center',{
        url:"/center",
        views:{
          'center-tab':{
            templateUrl:"templates/center/center.html",
            controller: "centerCtrl as center"
          }
        }
      })
      .state('tabs.centerInvestStyle',{
        url:"/center/centerInvestStyle",
        views:{
          'center-tab':{
            templateUrl:"templates/center/style.html",
            controller: "centerCtrl as center"
          }
        }
      })
      .state('tabs.riskLevel',{
        url:"/center/riskLevel",
        views:{
          'center-tab':{
            templateUrl:"templates/center/risklevel.html",
            controller: "centerCtrl as center"
          }
        }
      })
      .state('tabs.personal',{
        url:"/center/personal",
        views:{
          'center-tab':{
            templateUrl:"templates/center/personal.html",
            controller: "centerCtrl as center"
          }
        }
      })
      .state('tabs.historyTrade',{
        url:"/center/historyTrade",
        views:{
          'center-tab':{
            templateUrl:"templates/center/historytrade.html",
            controller: "centerCtrl as center"
          }
        }
      })
      .state('tabs.centerStyle',{
        url:"/center/nowTrade",
        views:{
          'center-tab':{
            templateUrl:"templates/center/nowtrade.html",
            controller: "centerCtrl as center"
          }
        }
      })
      .state('tabs.account',{
        url:"/center/account",
        views:{
          'center-tab':{
            templateUrl:"templates/center/account.html",
            controller: "centerCtrl as center"
          }
        }
      })
    $urlRouterProvider.otherwise("/slide");
    function checkLoginState(){

    }

  })
