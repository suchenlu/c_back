 (function(){
       $(function(){
        var speed=100;
        $('.stop').click(function(){
            $('.togglebar').show()
            $('.siderbar').animate({'left':-240},speed)  
            $('.tabbar-wrap,.main,.footer').animate({'left':0},speed)   
        })
        $('.toggle-open').click(function(){
            $('.togglebar').hide()
            $('.siderbar').animate({'left':0},speed)
            $('.tabbar-wrap,.main,.footer').animate({'left':240},speed)     
        })
        $('.tabbar a').hover(function(){
            $(this).find('span').hide();
        },function(){
            $(this).find('span').show();
        })
        $('.tabbar .b2b').hover(function(){
            $(this).siblings('.user_center').find('span').hide();
        },function(){
            $(this).siblings('.user_center').find('span').show();
        })
        $('.tabbar .b2c').hover(function(){
            $(this).siblings('.b2b').find('span').hide();
        },function(){
            $(this).siblings('.b2b').find('span').show();
        })
        $('.panel-title').click(function(){
            if($(this).parent().siblings('.panel-collapse').hasClass('collapse')){
                $(this).addClass('active').parents('.panel').siblings().find('.panel-title').removeClass('active')   
            }else{
                $(this).removeClass('active')
            }
        })
        $('.panel-body').click(function(){
        	$(this).addClass('active').siblings().removeClass('active')
        	$('.panel-collapse.collapse').find('.panel-body').removeClass('active')
        })
        $('#on_line').click(function(){
        	$('.qqbox-layer').show().click(function(){
        		$(this).hide()
        	})
        })
      })
    })(jQuery) 