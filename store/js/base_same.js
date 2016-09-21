function placeholrderSupport() {

        // 判断浏览器是否支持placeholder属性
        supportPlaceholder = 'placeholder' in document.createElement('input'),

            placeholder = function(input) {

                var text = input.attr('placeholder'),
                    defaultValue = input.defaultValue;

                if (!defaultValue) {

                    input.val(text).addClass("phcolor");
                }

                input.focus(function() {

                    if (input.val() == text) {

                        $(this).val("");
                    }
                });


                input.blur(function() {

                    if (input.val() == "") {

                        $(this).val(text).addClass("phcolor");
                    }
                });

                //输入的字符不为灰色
                input.keydown(function() {

                    $(this).removeClass("phcolor");
                });
            };

        // 当浏览器不支持placeholder属性时，调用placeholder函数
        if (!supportPlaceholder) {

            $('input').each(function() {

                text = $(this).attr("placeholder");

                if ($(this).attr("type") == "text") {

                    placeholder($(this));
                }
            });
        }

    };
    placeholrderSupport();

//头部登陆后状态
$(".nav_right .After_landing a").click(function() {
	$(".nav_right .After_landing").toggleClass("hei_class")
})
$(".float_window_right .After_landing a").click(function() {
		$(".float_window_right .After_landing").toggleClass("hei_class")
	})
	//banner开始
$(".slider").slide({
		titCell: ".slider_extra ul li",
		mainCell: ".slider_main",
		effect: "fade",
		autoPlay: true
	})
	//banner结束
//右侧侧边栏
$(function() {
	$(".backTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$(".open").click(function() {
		$(".sidebar_1").toggle();
		$(".sidebar .contentBOX ul li.open a").toggleClass("a_2");
	});
})
//主体内容title默认样式
$(document).ready(function() {
		//线路切换  
		$(".change_line p").click(function() {
			if ($(this).parents(".position_info").siblings(".city_list").css("display") == "none") {
				$(this).parents(".position_info").siblings(".city_list").show();
				$(this).parents(".position_info").addClass("bg_f");
                $(".color_white").css("color","#666");
			} else {
				$(this).parents(".position_info").siblings(".city_list").hide();
				$(this).parents(".position_info").removeClass("bg_f");
                 $(".color_white").css("color","#fff");
			}
		})

		$(".city_list").slide({
			titCell: ".hd ul li",
			mainCell: ".bd ul",
			effect: "fade",
			trigger: "click"
		})
		//悬浮框圆点下拉框
		$(".float_window_menu,.put ul li").click(function() {
				if ($(".put").css("display") == "none") {
					$(".put").show();
				} else {
					$(".put").hide();
				}
			})
		//nav  品牌开始
$(function() {
		$(".search_check").click(function() {
			$(".search_check_list").slideToggle(200);
		})
		$(".search_check_list a").click(function() {
			$(".search_check span").html($(this).html());
			$(".search_check_list").slideToggle(200);
		})
		$(".product_line").hover(function() {
			return true;
		}, function() {
			setTimeout(function() {
				$(".search_check_list").css({
					"display": "none"
				});
			}, 200);
		});
	})
	//nav  品牌结束
		//游客导航个人中心弹出框
		$(".my_content").click(function() {
			if ($(".my_news").css("display") == "none") {
				$(".my_news").show();
			} else {
				$(".my_news").hide();
			}
		})

	})
	//瀑布流
$(function() {
	setTimeout(function() {
		$("#content").masonry({
			itemSelector: ".post",
			columnWidth: 2
		});
	}, 100)
});
//搜索框叉号
function hHb() {
	var Close = $("#closes").val();
	if (Close !== "") {
		$(".close_fh").show()
	} else {
		$(".close_fh").hide()
	}
	$(".close_fh").click(function() {
		$("#closes").val("");
		$(this).hide()
	})
}
