/**
 * Created by Mr.Carry on 16/7/2.
 */

managerApp.controller("managerCtrl", function ($scope, $rootScope, $state) {
    $scope.$on("manager-addItem", function () {
        $scope.$broadcast('addItem');
    });

    $scope.$on("show-toolbar-addItem", function (ev, flag) {
        $scope.$broadcast('show-addItem', flag);
    });
});

managerApp.controller("menuCtrl", function ($scope, $mdSidenav) {
    $scope.leftClose = function () {
        $mdSidenav('left-menu').close();
    };
});

managerApp.controller("headerToolberCtrl", function ($scope, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left-menu');

    function buildToggler(navID) {
        return function () {
            $mdSidenav(navID).toggle();
        }
    }

    $scope.addItem = function () {
        $scope.$emit('manager-addItem');
    }

    $scope.$on("show-addItem", function (ev, flag) {
        if (flag) {
            $scope.isAddItem = true;
        } else {
            $scope.isAddItem = false;
        }

    })
});