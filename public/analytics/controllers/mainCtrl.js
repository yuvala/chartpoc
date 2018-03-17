angular.module('brainlab.analytics')
.controller('MainController', ['$scope','mock',
    function ($scope,mock) {
        ctrl = this;
        ctrl.actionLogs;
        ctrl.data= {male:60, female:40};
        
        ctrl.mockData  = mock.json;
        function init() {
            
        }

        init();

    }]
);