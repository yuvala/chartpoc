angular.module('brainlab.analytics')
.controller('ActionLogController', ['$scope', 'actionLogSvc','mock',
    function ($scope, actionLogSvc,mock) {
        ctrl = this;
        ctrl.actionLogs;
        ctrl.data= {male:60, female:40};
        function getActionLog() {
            actionLogSvc.getList(function (data) {
                //ctrl.actionLogs = angular.copy(data);
                ctrl.actionLogs = _.forEach(angular.copy(data), function (entry) {
                    entry.time = moment(entry.time).format('HH:m:s  DD.MM');
                    console.log(entry.time);
                });
            });
        }
        function init() {
            getActionLog();
        }

        init();

    }]
);