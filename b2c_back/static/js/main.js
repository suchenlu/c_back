$(function() {
    $('#myTab li:eq(0) a').tab('show');

    $('.option-list>li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('.more').click(function() {
        var oplist = $(this).siblings('.option-list');
        if (oplist.hasClass('height-auto')) {
            oplist.removeClass('height-auto')
        } else {
            oplist.addClass('height-auto')
        }
    })

    var $checkbox = $('.table tbody input[type=checkbox]');
    $('.check-all').change(function() {
        var bool = $(this).prop('checked');
        $checkbox.prop('checked', bool)
    });
    $checkbox.change(function() {
        var $checked = $checkbox.filter(':checked');
        if ($checkbox.length == $checked.length) {
            $('.check-all').prop('checked', true)
        } else {
            $('.check-all').prop('checked', false)
        }
    });

    $('button.cancel-agent').click(function() {
        var $checked = $checkbox.filter(':checked');
        if ($checked.length < 1) {
            alert('请选择要取消代理的产品')
            return false
        }else {
            cancelAgent()
        }
        // if (confirm('确认取消代理该产品？')) {
        //     $checked.parents('tr').remove()
        // } else {
        //     return false
        // }
    })
    $('button.price-adjust').click(function() {
        $checkbox = $('.table tbody input[type=checkbox]');
        var $checked = $checkbox.filter(':checked');
        if ($checked.length < 1) {
            alert('请选择要调整价格的产品')
            return false
        } else if ($checked.length == 1) {
            ajustPrice()
            return false
        } else if ($checked.length > 1) {
            var title = '商品加价';
            var content = '<form class="price-add"><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：同行价+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span></p></form>';
            $('.modal-title,.modal-body', window.parent.document).html('');
            $('.modal-title', window.parent.document).append(title);
            $('.modal-body', window.parent.document).append(content);
            window.parent.modal();
        }
    })

    function cancelAgent() {
        var title = '提示';
        var content = '<p class="cancel-agent">确认取消代理该产品<em>？</em></p>';
        $('.modal-title,.modal-body', window.parent.document).html('');
        $('.modal-title', window.parent.document).append(title);
        $('.modal-body', window.parent.document).append(content);
        window.parent.modal();
    }
    $('a.cancel-agent').click((function(event) {
       $(this).parents('tr').remove();
    }));
    function ajustPrice() {
        var title = '商品加价';
        var content = '<form class="price-add"><p>同行价：2000元</p><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：<span class="original">2000</span>元+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span> = <span class="result">2000</span>元</p></form>';
        $('.modal-title,.modal-body', window.parent.document).html('');
        $('.modal-title', window.parent.document).append(title);
        $('.modal-body', window.parent.document).append(content);
        window.parent.modal();
    }
    function setPrice() {
        var title = '商品加价';
        var content = '<form id="setPrice" class="price-add"><p>同行价：2000元</p><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：<span class="original">2000</span>元+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span> = <span class="result">2000</span>元</p></form>';
        $('.modal-title,.modal-body', window.parent.document).html('');
        $('.modal-title', window.parent.document).append(title);
        $('.modal-body', window.parent.document).append(content);
        window.parent.modal();
    }
    $('a.price-adjust').click(function() {
        ajustPrice()
    })
    $('.onekey-agent').click(function(event) {
        $checkbox = $('.table tbody input[type=checkbox]');
        var $checked = $checkbox.filter(':checked');
        if ($checked.length < 1) {
            alert('请选择要代理的产品')
            return false
        } else if ($checked.length == 1) {
            setPrice()
            return false
        } else if ($checked.length > 1) {
            var title = '商品加价';
            var content = '<form id="setPrice" class="price-add"><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：同行价+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span></p></form>';
            $('.modal-title,.modal-body', window.parent.document).html('');
            $('.modal-title', window.parent.document).append(title);
            $('.modal-body', window.parent.document).append(content);
            window.parent.modal();
        }
    });
    $('.pagination>li>a').click(function(){
        $(this).parent().not('.next, .prev').addClass('active').siblings().removeClass('active');
    })
})
