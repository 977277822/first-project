/**
 * Created by Mr.Carry on 16/6/20.
 */


(function () {
    app.controller("homeCtrl", function ($scope,autoHeight,homeService) {
        var imgSize = [375, 190];
        var size = autoHeight.getImgSize(375,190);

        $scope.banner =  banner = new homeService.Banner();

        $scope.opt = opt = {};

        opt.getImageSize = function(){
            return {
                width : size.width + "px",
                height : size.height + "px"
            }
        }
    })
})();