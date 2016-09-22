$(function() {
    //tab selected
    $('.option-list>li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    });
    // more show
    $('.more').click(function() {
        var oplist = $(this).siblings('.option-list');
        if (oplist.hasClass('height-auto')) {
            oplist.removeClass('height-auto')
        } else {
            oplist.addClass('height-auto')
        }
    })
    //checkAll
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
    //close modal
    $('.confirm, .cancel, .close').click(function() {
        $('#myModal').hide()
        window.parent.maskHide()
    })
    //cancel-agent batch or single
    $('button.cancel-agent').click(function() {
        var $checked = $checkbox.filter(':checked');
        if ($checked.length < 1) {
            alert('请选择要取消代理的产品')
            return false
        } else {
            window.parent.maskShow()
            cancelAgent()
            $('.confirm').click(function() {
                $checked.parents('tr').remove()
            });
        }
    })

    //price-adjust batch or single
    $('button.price-adjust').click(function() {
        $checkbox = $('.table tbody input[type=checkbox]');
        var $checked = $checkbox.filter(':checked');
        if ($checked.length < 1) {
            alert('请选择要调整价格的产品')
            return false
        } else if ($checked.length == 1) {
            window.parent.maskShow()
            ajustPrice()
            return false
        } else if ($checked.length > 1) {
            window.parent.maskShow()
            var title = '商品加价';
            var content = '<form class="price-add"><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：同行价+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span></p></form>';
            $('.modal-title, .modal-body').html('');
            $('.modal-title').append(title);
            $('.modal-body').append(content);
            $('#myModal').show()
        }
    })

    function cancelAgent() {
        var title = '提示';
        var content = '<p class="modal-info">确认取消代理该产品<em>？</em></p>';
        $('.modal-title,.modal-body').html('');
        $('.modal-title').append(title);
        $('.modal-body').append(content);
        $('#myModal').show()
    }
    //cancelAgent single
    $('a.cancel-agent').click((function(event) {
        window.parent.maskShow()
        cancelAgent()
        var _this = $(this);
        $('.confirm').click(function() {
            _this.parents('tr').remove()
        });
    }));

    function ajustPrice() {
        var title = '商品加价';
        var content = '<form class="price-add"><p>同行价：2000元</p><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：<span class="original">2000</span>元+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span> = <span class="result">2000</span>元</p></form>';
        $('.modal-title,.modal-body').html('');
        $('.modal-title').append(title);
        $('.modal-body').append(content);
        $('#myModal').show()
        calcPrice()
    }
    //real-time calculate price
    function calcPrice() {
        var original = parseInt($('.original').text());
        var add = parseInt($('.add').val()) || 0;
        $('.result').text(original + add)

        function result() {
            $('.add').keyup(function() {
                add = parseInt($(this).val()) || 0;
                $('.result').text(original + add)
            })
        }
        result()
        $(".price-add input[type='radio']").change(function() {
            var type = $(this).attr('id');
            if (type == 'interge') {
                $('.int').show();
                $('.per').hide();
                original = parseInt($('.original').text());
                add = parseInt($('.add').val()) || 0;
                $('.result').text(original + add)
                result()
            } else if (type == 'percentage') {
                $('.per').show();
                $('.int').hide();
                add = parseInt($('.add').val()) / 100 || 0;
                original = parseInt($('.original').text());
                $('.result').text(original * (1 + add))
                $('.add').keyup(function() {
                    add = parseInt($(this).val()) / 100 || 0;
                    $('.result').text(original * (1 + add))
                })
            } else {
                return false
            }
        })
    }
    //setPrice batch or single
    function setPrice() {
        var title = '商品加价';
        var content = '<form id="setPrice" class="price-add"><p>同行价：2000元</p><p>加价类型：<label><input type="radio" name="type" id="interge" checked="checked">整数加价</label><label><input type="radio" name="type" id="percentage">百分比加价</label></p><p>销售价：<span class="original">2000</span>元+<input type="text" class="form-control add"><span class="int">元</span><span class="per">%</span> = <span class="result">2000</span>元</p></form>';
        $('.modal-title,.modal-body').html('');
        $('.modal-title').append(title);
        $('.modal-body').append(content);
        $('#myModal').show()
        window.parent.maskShow()
        calcPrice()
    }
    // price-adjust single
    $('a.price-adjust').click(function() {
        window.parent.maskShow()
        ajustPrice()
    })
    //onekey-agent
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
            $('.modal-title,.modal-body').html('');
            $('.modal-title').append(title);
            $('.modal-body').append(content);
            $('#myModal').show()
            window.parent.maskShow()
        }
    });
    //delete product batch or single
    $('.product-del').click(function(){
        $checkbox = $('.table tbody input[type=checkbox]');
        var $checked = $checkbox.filter(':checked');
        if($checked.length<1){
            alert('请选择要删除的产品')
        }else{
            $('#myModal').show()
            window.parent.maskShow()
            $('.confirm').click(function(){
                 $checked.parents('tr').remove()
            })
        }
    })
    //pagination
    $('.pagination>li>a').click(function() {
        $(this).parent().not('.next, .prev').addClass('active').siblings().removeClass('active');
    })
    // table>tr moveUp
    $('.move-up').click(function(){
        var $tr = $(this).parents('tr');
        if($tr.index() != 0){
            $tr.prev().before($tr)
            $tr.fadeOut(50).fadeIn(50)
        }
    })
    //tabel>tr moveDown
    $('.move-down').click(function(){
        var $tr = $(this).parents('tr');
        var len = $(this).parents('tbody').find('tr').length;
        if($tr.index() != len - 1){
            $tr.next().after($tr)
            $tr.fadeOut(50).fadeIn(50)
        }
    })
    //disabled modal
    $('.js_disabled').click(function(){
        $('#myModal').show()
        window.parent.maskShow()
    })
})
