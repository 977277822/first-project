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

    opt.del = function(id,ev){
        var confirm = $mdDialog.confirm()
            .title('提示')
            .textContent('确认删除吗？')
            .targetEvent(ev)
            .ok('取消')
            .cancel('删除');
        $mdDialog.show(confirm).then(function() {
            console.log("取消")
        }, function() {
            console.log("删除")
        });
    }

    opt.refresh();
});