/**
 * Created by Mr.Carry on 16/6/20.
 */
var app = angular.module("app",["init"]);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state("/",{
            url : "/",
            templateUrl : "/views/home"
        }).state("items",{
            url : "/items",
            templateUrl : "/views/items"
        }).state("performer",{
            url : "/performer",
            templateUrl : "/views/performer"
        }).state("judge-plays",{
            url : "/judge-plays",
            templateUrl : "/views/judge"
        }).state("new－plays",{
            url : "/new－plays",
            templateUrl : "/views/new_plays"
        });;
    $urlRouterProvider.otherwise('/');
});