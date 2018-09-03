$(function () {
    // 用户登出接口
    $("#li_signout").click(function() {

                alert("成功退出");
                sessionStorage.removeItem("lastname");
                $("#li_span_signin").text("登录").off('click', '**');
                $("#li_signup").attr("style", "display:inline");
                $("#li_signout").attr("style", "display:none");

    });

})