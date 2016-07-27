/**
 * Created by huk on 2016/7/23.
 */
angular.module('app.directive')
  .directive('returnChart', returnChartDireact);
angular.module('app.directive')
  .directive('assetChart', assetChartDireact);

returnChartDireact.$inject = ['ajService'];
assetChartDireact.$inject = ['ajService'];

function assetChartDireact(ajService) {
  return {
    scope: {
      id: "@",
      legend: "=",
      item: "=",
      data: "="
    },
    restrict: 'E',
    replace: true,
    template: '<div style="height:400px"></div>',
    link: function ($scope, element, attrs, controller) {
      var option = {
        // 提示框，鼠标悬浮交互时的信息提示
        tooltip: {
          show: true,
          trigger: 'item'
        },
        // 图例
        legend: {
          data: $scope.legend
        },
        // 横轴坐标轴
        xAxis: [{
          type: 'category',
          data: $scope.item
        }],
        // 纵轴坐标轴
        yAxis: [{
          type: 'value'
        }],
        // 数据内容数组
        series: function () {
          var serie = [];
          for (var i = 0; i < $scope.legend.length; i++) {
            var item = {
              name: $scope.legend[i],
              type: 'line',
              data: $scope.data[i]
            };
            serie.push(item);
          }
          return serie;
        }()
      };
      var myChart = echarts.init(document.getElementById($scope.id));
      myChart.setOption(option);
    }
  }
}

function returnChartDireact(ajService) {
  return {
    scope: {
      id: "@",
      legend: "=",
      item: "=",
      data: "="
    },
    restrict: 'E',
    replace: true,
    template: '<div style="height:240px;"></div>',
    link: function ($scope, element, attrs, controller) {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: 'center',
          bottom: 'bottom',
          data: $scope.legend
        },
        series: [
          {
            name: '资产配置',
            type: 'pie',
            radius: '50%',
            center: ['50%', '35%'],
            data: function(){
              var serie = [];
              for(var i=0;i<$scope.legend.length;i++){
                var item = {
                  name:$scope.legend[i],
                  value:$scope.data[i]
                }
                serie.push(item);
              }
              return serie;
            }(),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      var myChart = echarts.init(document.getElementById($scope.id));
      myChart.setOption(option);
    }
  }
}
