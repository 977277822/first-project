/**
 * Created by Mr.Carry on 16/7/3.
 */


managerApp.controller("itemsCtrl", function ($rootScope, $scope, itemsService, $mdDialog, $mdMedia) {
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.items = [];

    $scope.opt = opt = {};

    opt.refresh = function () {
        itemsService.query().then(function (data) {
            $scope.items = data;
        });
    };

    opt.del = function (item, ev) {
        var confirm = $mdDialog.confirm()
            .title("删除提示")
            .textContent("确认删除[" + item.c_name + "]吗？")
            .targetEvent(ev)
            .ok("取消")
            .cancel("删除");
        $mdDialog.show(confirm).then(function () {
            console.log("取消")
        }, function () {
            console.log("删除")
        });
    }
    $scope.$on("addItem", function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: function ($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.create = function (answer) {
                    $mdDialog.hide(answer);
                };
            },
            templateUrl: '/manager/page/addItem',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
            .then(function (answer) {
            }, function () {
            });
    });

    $scope.$emit("show-toolbar-addItem", true);

    $scope.$on("$destroy", function () {
        $scope.$emit("show-toolbar-addItem", false);
    });

    opt.refresh();
});