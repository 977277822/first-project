/**
 * Created by Mr.Carry on 16/7/2.
 */


var managerApp = angular.module("managerApp", ["ngMaterial", "ui.router"]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
});

managerApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("items", {
        url: "/items",
        title: "剧目",
        templateUrl: "manager/page/items"
    }).state("index", {
        url: "/index",
        title: "首页",
        templateUrl: "manager/page/index"
    });

    $urlRouterProvider.otherwise('index');
});