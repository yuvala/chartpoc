angular.module('brainlab.analytics')
.service('analyticsSvc', [  function () {
    
    var actionLogs;
    this.getList = function (succsessCallBack) {
        // if (!actionLogs) {
        //     init();
        // }
        // succsessCallBack(actionLogs);
    };

    this.addAction = function (actioName, item) {
        // var newLog = angular.copy(item);
        // newLog.action = actioName;
        // newLog.time = new Date().getTime();
        // actionLogs.push(newLog);
        // LocalStorageSvc.set('action-log', actionLogs);
        // console.log('add action:' + newLog.action );
    }    
  
    function init() {
     //   actionLogs = LocalStorageSvc.get('action-log') ? LocalStorageSvc.get('action-log') : [] ;
    }
    init();
}]);