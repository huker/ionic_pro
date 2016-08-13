/**
 * Created by huk on 2016/7/23.
 */
angular.module('app.directive')
  .directive('returnChart', returnChartDireact);
angular.module('app.directive')
  .directive('assetChart', assetChartDireact);
angular.module('app.directive')
  .directive('homeChart', homeChartDireact);
angular.module('app.directive')
  .directive('questionRadio', questionRadio);

returnChartDireact.$inject = ['ajService'];
assetChartDireact.$inject = ['ajService'];
questionRadio.$inject = ['ajService'];
homeChartDireact.$inject = ['ajService'];

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
    template: '<div style="height:350px"></div>',
    link: function ($scope, element, attrs, controller) {
      console.log($scope.legend,$scope.item,$scope.data)
      var option = {
        // 提示框，鼠标悬浮交互时的信息提示
        tooltip: {
          show: true,
          trigger: 'item'
        },
        // 图例
        legend: {
          bottom: 'bottom',
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
        color:['#DBE9C6','#948EB2', '#EDB88C', '#A3BD9A',
          '#ECE6C6','#749f83',  '#ca8622', '#bda29a','#6e7074',
          '#546570', '#c4ccd3'],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: 'center',
          top: '10%',
          data:
            function () {
              var legend = [];
              for (var i=0;i<$scope.legend.length;i++){
                var item = {
                  name:$scope.legend[i],
                  icon:'circle'
                }
                legend.push(item);
              }
              return legend;
            }()
        },
        series: [
          {
            name: '资产配置',
            type: 'pie',
            radius: '50%',
            center: ['50%', '55%'],
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

function questionRadio(){
  return{
    restrict: 'E',
    replace: true,
    template: '<div class="demo-list clear"><ul> <li> <input tabindex="1" type="checkbox" id="input-1"> <label for="input-1">Checkbox, <span>#input-1</span></label> </li> <li> <input tabindex="2" type="checkbox" id="input-2" checked> <label for="input-2">Checkbox, <span>#input-2</span></label> </li> </ul> <ul> <li> <input tabindex="3" type="radio" id="input-3" name="demo-radio"> <label for="input-3">Radio button, <span>#input-3</span></label> </li> <li> <input tabindex="4" type="radio" id="input-4" name="demo-radio" checked> <label for="input-4">Radio button, <span>#input-4</span></label></li></ul>',
    link:function($scope, element, attrs, controller){

    }
  }
}

function homeChartDireact(){
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
        color:['#9DE4EE','#FB6A67', '#FDA3C4', '#87C79A',
          '#FCDA6F','#749f83',  '#ca8622', '#bda29a','#6e7074',
          '#546570', '#c4ccd3'],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          right: '15%',
          top:'middle',
          data:function(){
            var serie = [];
            for(var i=0;i<$scope.legend.length;i++){
              var item = {
                name:$scope.legend[i],
                value:$scope.data[i]
              }
              serie.push(item);
            }
            console.log(serie)
            return serie;
          }()
        },
        series: [
          {
            name:'资产分布',
            type:'pie',
            center: ['30%', '50%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
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
          }
        ]
      };
      var myChart = echarts.init(document.getElementById($scope.id));
      myChart.setOption(option);
    }
  }
}


