/* 
* @Author: anchen
* @Date:   2016-09-13 17:12:41
* @Last Modified by:   anchen
* @Last Modified time: 2016-09-18 14:57:13
*/
$(document).ready(function(){
    $(".top2 div").hover(function(){
        if($(this).find("ul").css("display") == "none"){
            $(this).find("ul").show();
        }
        else{
            $(this).find("ul").hide();
        }  
    })

    $(".shop_bot>div").hover(function(){
        if($(this).find("div").css("display") == "none"){
            $(this).find("div").show().parent("div").siblings("div").find("div").hide();
        }
        else{
            $(this).find("div").hide();
        }  
    })

    // 忘记密码 开始
    $(".forget_mm").click(function(){
        $("#register").show();
        $("body").css("overflow","hidden");
    })

    $(".zc_tz").click(function(){
        $("#register").hide();
        $("body").css("overflow","scroll");
    })

    $(".qh_2 .next1").click(function(){
        var i=5;
        var countdown = null;
        function timeShow(){
            i--;
            $(".countdown").html(i);
            if(i<1){
                clearInterval(countdown);
                $("#register").hide();
            }
        };
        countdown = setInterval(timeShow,1000);
        $("body").css("overflow","scroll");
    })
    // 忘记密码 结束
    
    $(".shop_er").hover(function(){
        if($(this).find(".shop_hover").css("display") == "none"){
            $(this).find(".shop_hover").show();
        }
        else{
            $(this).find(".shop_hover").hide();
        }
        
    })

    $("#order_button2").hover(function(){
        if($(this).find("p").css("display") == "none"){
            $(this).find("p").show();
            $(this).css("border-bottom","none");
        }
        else{
            $(this).find("p").hide();
            $(this).css("border-bottom","1px solid #ff7b43");
        }
    })

});