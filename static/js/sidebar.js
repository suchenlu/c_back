 (function() {
     $(function() {
         var speed = 100;
         $('.stop').click(function() {
             $('.togglebar').show()
             $('.siderbar').animate({ 'left': -240 }, speed)
             $('.tabbar-wrap,.main,.footer').animate({ 'left': 0 }, speed)
         })
         $('.toggle-open').click(function() {
             $('.togglebar').hide()
             $('.siderbar').animate({ 'left': 0 }, speed)
             $('.tabbar-wrap,.main,.footer').animate({ 'left': 240 }, speed)
         })
         $('.tabbar a').click(function() {
             $(this).addClass('active').siblings().removeClass('active');
         })
         $('.panel-title').click(function() {
             if (!$(this).parent().siblings('.panel-collapse').hasClass('in')) {
                 $(this).addClass('active').parents('.panel').siblings().find('.panel-title').removeClass('active')
             } else {
                 $(this).removeClass('active')
             }
         })
         $('.panel-body').click(function() {
             $(this).addClass('active').siblings().removeClass('active')
             $(this).parents('.panel').siblings().find('.panel-body').removeClass('active')
         })
         $('#on_line').click(function() {
             $('.qqbox-layer').show().click(function() {
                 $(this).hide()
             })
         })
         $(".select_qq").click(function() {
             $("#qq_box").html("<iframe style='display: none;' src='tencent://message/?Menu=yes&amp;amp;uin=800110999&amp;amp;Service=58&amp;amp;SigT=A7F6FEA02730C9889634AA2E49021A63F018DDE404D5BE76EA54BFF1FB91DD5AB6CA6FECDCC8201F43EDC913D351BAB94A3E747B79C41E65E16FA44F7652E14846C38F5D1350EAA1D7AC30A0605A7AE02B64340F24F57AD9299F4FCD4CDB554E8D4E0A9F5780062A22315D20F0481DDDEDFDE2A072F21132&amp;amp;SigU=30E5D5233A443AB2D640796E9A770C7C31A83A09E4C6BE8B062993E08E03B33BA7FA61A956F9A412014595963F3CB4C7DBFFCA99C57AF925B5CE903CEFC1302B9156DAF66FF19179'></iframe>");
         })
     })
 })(jQuery)
