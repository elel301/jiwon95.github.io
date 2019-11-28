$(document).ready(function(){
    $('.visualList a').click(function(e){
        e.preventDefault();
        visual($(this).index());
    })
    
    function visual(dis){
        $('.visualList a.on').removeClass('on');
        $('.visualList a:eq('+dis+')').addClass('on');
        $('.visual li.on').removeClass('on');
        $('.visual li:eq('+dis+')').addClass('on');
        
        if($('.visualList a:eq('+dis+')').hasClass('after')){
            $('.visualBtn a:first-child').addClass('on');
            $('.visualBtn a:last-child').removeClass('on');
        }else if($('.visualList a:eq('+dis+')').hasClass('before')){
            $('.visualBtn a:first-child').removeClass('on');
            $('.visualBtn a:last-child').addClass('on');
        }
    }
    
    (function($){
        $(window).on("load",function(){
            $(".visual li span").mCustomScrollbar();
        });
    })(jQuery);
    
    $(".sub1 .visual li:first-child span").mCustomScrollbar('disable');
})
