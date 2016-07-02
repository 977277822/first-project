/**
 * Created by Mr.Carry on 16/7/2.
 */


var managerApp = angular.module("managerApp", ["ngMaterial"]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
});