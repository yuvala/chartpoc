angular.module('brainlab.analytics', [])
    .directive('barChart', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment     
            template: '<div>{{data.male}}</div>',

            scope: {
                data: '='
            },
            link: function (scope, element, attr) {
                d3.select(element[0]);
                console.log(scope.data);
            }
        };
    });