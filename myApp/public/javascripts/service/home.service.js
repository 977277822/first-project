/**
 * Created by Mr.Carry on 16/6/26.
 */


(function(){
    app.service("homeService",function(module){
        var Banner = module.create({
            __instanceBefore : function(){
                this.__setData({
                    data : [
                        {
                            img : "/images/pic_info1.png",
                            title : "罗密欧与朱丽叶－00经典版与10最新版",
                            recommend : "“CARA，剧迷心中永远最美的朱丽叶”"
                        },
                        {
                            img : "/images/pic_info1.png",
                            title : "罗密欧与朱丽叶－00经典版与10最新版",
                            recommend : "“CARA，剧迷心中永远最美的朱丽叶”"
                        },
                        {
                            img : "/images/pic_info1.png",
                            title : "罗密欧与朱丽叶－00经典版与10最新版",
                            recommend : "“CARA，剧迷心中永远最美的朱丽叶”"
                        }
                    ]
                })
            }
        });

        return {
            Banner : Banner
        }
    })
})();