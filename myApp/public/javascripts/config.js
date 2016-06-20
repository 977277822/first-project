/**
 * Created by Mr.Carry on 16/6/20.
 */
var app = angular.module("app",["init"]);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state("/",{
            url : "/",
            templateUrl : "/views/home"
        });
    $urlRouterProvider.otherwise('/');
});