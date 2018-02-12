angular.module('brainlab.analytics')
.directive('barChartHorizontal', ['D3Service', function (D3Service){
    return {
        restrict:'EA',
        template:'<div>{{data.male}}</div>',
        scope:{
            data:'='
        },
        link: function(scope,element){
            D3Service.d3().then( function(d3){
                var _height = 500;
                var _width = 500;
               var canvas = d3.select(element[0]).append('svg')
                            .attr('height', _height)
                            .attr('width', _width);
            });
             
        }

    };
}]);