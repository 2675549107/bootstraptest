/**
 *
 * Created by wjl on 2017/10/18.
 */

// 页面载入时,布局自适应窗口高度
$(function () {
    var width = $(window).width();
    var height = $(window).height();
    $("article").css("height", height - 125 + "px");
    $("#div_article-bg-right").css("height", height - 125 + "px");
    $("#div_article-bg-left-under").css("height", height - 325 + "px");
});

// 窗口缩放时,布局自适应窗口高度
$(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();
    $("article").css("height", height - 125 + "px");
    $("#div_article-bg-right").css("height", height - 125 + "px");
    $("#div_article-bg-left-under").css("height", height - 325 + "px");
});

// 局部刷新
//$(function() {
//    $(".account-list li").click(function() {
//        var sId = $(this).data("id");
//        window.location.hash = sId;
//        var pathn;
//        var sId = $(this).index();
//        switch (sId) {
//            case 0:
//                pathn = "user_center.html";
//                break;
//            case 1:
//                pathn = "user_investment.html";
//                break;
//            case 2:
//                pathn = "user_fund.html";
//                break;
//            case 3:
//                pathn = "user_bill.html";
//                break;
//            case 4:
//                pathn = "user_information.html";
//                break;
//            case 5:
//                pathn = "user_setting.html";
//                break;
//            default :
//                pathn = "user_center.html";
//                break;
//        }
//        $("#div_article-bg-right").load(pathn);
//
//    });
//})

$(function () {
    $(".account-list").on("click", "li", function () {
        var sId = $(this).data("id");
        window.location.hash = sId;
        loadInner(sId);
    });
    function loadInner(sId) {
        var sId = window.location.hash;
        var pathn, i;
        switch (sId) {
            case "#center":
                pathn = "user_center.html";

                i = 0;
                break;
            case "#investment":
                pathn = "user_investment.html";
                i = 1;
                break;
            case "#fund":
                pathn = "user_fund.html";
                i = 2;
                break;
            case "#bill":
                pathn = "user_bill.html";
                i = 3;
                break;
            case "#information":
                pathn = "user_information.html";
                i = 4;
                break;
            case "#setting":
                pathn = "user_setting.html";
                i = 5;
                break;
            default :
                pathn = "user_center.html";
                i = 0;
                break;
        }
        $("#div_article-bg-right").load(pathn + " #div_article-bg-right");
        $(".account-list li").eq(i).addClass("current").siblings().removeClass("current");
        return 0;
    }
    var sId = window.location.hash;
    loadInner(sId);
});