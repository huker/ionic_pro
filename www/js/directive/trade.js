/**
 * Created by huk on 2016/8/29.
 */
angular.module('app.directive')
.directive('hideTabs',hideTabs);

hideTabs.$inject = ['$rootScope'];

function hideTabs($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {

      scope.$on('$ionicView.beforeEnter', function() {

        scope.$watch(attributes.hideTabs, function(value){
          $rootScope.hideTabs = 'tabs-item-hide';
        });
      });

      scope.$on('$ionicView.beforeLeave', function() {
        scope.$watch(attributes.hideTabs, function(value){
          $rootScope.hideTabs = 'tabs-item-hide';
        });
        scope.$watch('$destroy',function(){
          $rootScope.hideTabs = false;
        })

      });
    }
  };
}
