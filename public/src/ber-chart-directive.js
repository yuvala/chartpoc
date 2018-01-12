angular.module('brainlab.analytics')
    .directive('barChart', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment     
            template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
        };
    });