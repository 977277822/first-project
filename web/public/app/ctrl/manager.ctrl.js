/**
 * Created by Mr.Carry on 16/7/2.
 */


managerApp.controller("menuCtrl", function ($scope, $mdSidenav) {
    $scope.leftClose = function(){
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
});