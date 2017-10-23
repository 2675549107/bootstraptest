/**
 * Created by wjl on 2017/10/18.
 */

//$(".account-list>a").click(function () {
//    e.preventDefault();
//    var url = this.href;
//    $("#content").load(pathn);
//    $(".current").removeClass("current");
//    $("#div_bg_right").remove();
//    $('#content').load(url + ' #div_bg_right').fadeIn('slow');
//});
//
    $(function () {
        $(".account-list>a").click(function () {
            var sId = $(this).data("id");
            window.location.hash = sId;
            loadInner(sId);
            //       $(".current").removeClass("current");
            //        $(this).addClass("current");
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
                case "setting":
                    pathn = "user_setting.html";
                    i = 5;
                    break;
                default :
                    pathn = "user_center.html";
                    i = 0;
                    break;
            }

            $(this).addClass("current");
        }
        var sId = window.location.hash;
        loadInner(sId);
    });