/**
 * Created by Mr.Carry on 16/7/2.
 */


managerApp.controller("menuCtrl", function ($scope) {
});

managerApp.controller("headerToolberCtrl", function ($scope, $mdSidenav, $timeout, $log) {
    $scope.toggleLeft = buildToggler('left-menu');

    function buildToggler(navID) {
        return function () {
            $mdSidenav(navID).toggle();
        }
    }


});