/**
 * Created by Mr.Carry on 16/7/3.
 */


managerApp.controller("itemsCtrl", function ($scope, itemsService,$mdDialog) {

    $scope.items = [];

    $scope.opt = opt = {};

    opt.refresh = function(){
        itemsService.query().then(function(data){
            $scope.items = data;
        });
    };

    opt.del = function(item,ev){
        var confirm = $mdDialog.confirm()
            .title("删除提示")
            .textContent("确认删除["+ item.c_name+"]吗？")
            .targetEvent(ev)
            .ok("取消")
            .cancel("删除");
        $mdDialog.show(confirm).then(function() {
            console.log("取消")
        }, function() {
            console.log("删除")
        });
    }

    opt.refresh();
});