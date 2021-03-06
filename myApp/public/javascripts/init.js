/**
 * Created by Mr.Carry on 16/6/20.
 */

angular.module("init",["ionic","modulex"]).run(['$rootScope', '$state', '$stateParams',"$ionicLoading",
    function($rootScope, $state, $stateParams,$ionicLoading) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        //视图改变开始时执行事件
        $rootScope.$on('$stateChangeStart', function(){
            //生成加载图片
            $ionicLoading.show({
                content: '',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });

        });
        $rootScope.$on('$stateChangeSuccess', function(){
            //隐藏加载图片
            $ionicLoading.hide();
        })
    }
]).config(function($httpProvider){
    $httpProvider.defaults.transformRequest = function(obj){
        var str = [];
        for(var p in obj){
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    $httpProvider.interceptors.push(function(){
        return {
            request: function(config){
                return config;
            },
            response: function(response){
                return response;
            }
        }
    });
}).directive("backButton", function() {
    return {
        scope: true,
        restrict : 'AE',
        replace : 'true',
        template : "<span class=\"header-button ion-chevron-left back-button\" ng-click=\"back()\"></span>",
        link : function(scope, element, attrs) {
            scope.back = function(){
                history.back();
            }
        }
    };
}).service("autoHeight",function(){
    return {
        getImgSize : function(w,h){
            var clientWidth = document.body.clientWidth;
            return { width : clientWidth , height :  clientWidth * (h / w) } ;
        }
    };
});