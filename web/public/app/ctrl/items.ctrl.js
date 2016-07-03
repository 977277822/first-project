/**
 * Created by Mr.Carry on 16/7/3.
 */


managerApp.controller("itemsCtrl", function ($scope, itemsService,$timeout) {

    $scope.items = [];

    $scope.opt = opt = {};

    opt.refresh = function(){
        itemsService.query().then(function(data){
            $scope.items = data;
        });
    };

    opt.refresh();
});