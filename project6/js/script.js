$(document).ready(function(){
    $('.gnb2depth').hide();
    $('.gnb1depth>li').on({
        mouseenter:function(){
            $(this).find('.gnb2depth').show();
        },
        mouseleave:function(){
            $('.gnb2depth').hide();
        }
    })
    
    $('.search>span').click(function(){
        $('.searchOn').css('opacity','1');
    })
    
    $('.searchBtn>a:last-child').click(function(){
        $('.searchOn').css('opacity','0');
    })
    
    /*visual*/
    $('.visualList>li:not(:first-child)').css('display','none')
    $('.visualList li.on span').css('opacity','1');
    var num=0;
    var visualSt=setInterval(visualAuto,6000);
    
    $('.visualBtn .point').click(function(e){
        e.preventDefault();
        visualList($(this).index());
    })
    
    $('.visualBtn a:last-child').click(function(e){
        e.preventDefault();
        if($(this).hasClass('stop')){
            clearInterval(visualSt);
            $('.visualBtn a:last-child').removeClass('stop').addClass('play');
        }else if($(this).hasClass('play')){
            clearInterval(visualSt);
            visualSt=setInterval(visualAuto,6000);
            $('.visualBtn a:last-child').removeClass('play').addClass('stop');
        }
    })
    
    function visualList(num){
        if(num>2)num=0
            $('.visualList li.on').fadeOut().removeClass('on');
            $('.visualList li:eq('+num+')').fadeIn().addClass('on');
            $('.visualBtn .point.on').removeClass('on');
            $('.visualBtn .point:eq('+num+')').addClass('on');
            $('.visualList li span').css('opacity','0');
            $('.visualList li.on span').css('opacity','1');
    }
    
    function visualAuto(){
        visualList($('.visualList > li.on').index()+1);
    }
    
    /*notice*/
    $('.notice ul li>a').click(function(e){
        e.preventDefault();
        $('.notice ul li>a.on').removeClass('on');
        $(this).addClass('on');
        $('.notice ul li a').next('.noticeList').css('display','none');
        $(this).next('.noticeList').css('display','block');
    })
    
    /*readme*/
    var dis=0;
    var readmeSt=setInterval(readmeAuto,5000)
    
    $('.readmeBtn .point').click(function(e){
        e.preventDefault();
        readmeList($(this).index());
    })
    
    function readmeList(dis){
        if(dis>2)dis=0;
            $('.readmeList').animate({
                left:-460*dis
            },1000)
            $('.readmeBtn .point').removeClass('on');
            $('.readmeBtn .point:eq('+dis+')').addClass('on');
    }
    
    function readmeAuto(){
        readmeList($('.readmeBtn a.on').index()+1);
    }
    
    $('.readmeBtn a:last-child').click(function(e){
        e.preventDefault();
        if($(this).hasClass('stop')){
            clearInterval(readmeSt);
            $('.readmeBtn a:last-child').removeClass('stop').addClass('play');
        }else if($(this).hasClass('play')){
            clearInterval(readmeSt);
            readmeSt=setInterval(readmeAuto,5000);
            $('.readmeBtn a:last-child').removeClass('play').addClass('stop');
        }
    })

    
    /*banner*/
    var num=0;
    var bannerSt=setInterval(bannerList,4000)
    function bannerList(){
        if(num>2)num=0;
            num++;
            $('.bannerList').animate({
                left:-133
            },1000,function(){
                $('.bannerList').append($('.bannerList li:first-child'))
                $('.bannerList').css('left','0')
            })
    }
    
    $('.bannerBtn a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('stop')){
            clearInterval(bannerSt);
            $('.bannerBtn a').removeClass('stop').addClass('play');
        }else if($(this).hasClass('play')){
            clearInterval(bannerSt);
            bannerSt=setInterval(bannerList,4000);
            $('.bannerBtn a').removeClass('play').addClass('stop');
        }
    })
    
    /*value*/
    
    $('.left').click(function(e){
        e.preventDefault();
        if($('.valueList').is(':animated')==false){
            $('.valueList').css('left','-235px');
            $('.valueList').prepend($('.valueList li:last-child'));
            $('.valueList').animate({
                left:0
            },500)
        }
        
    })
    
    $('.right').click(function(e){
        e.preventDefault();
        if($('.valueList').is(':animated')==false){
            $('.valueList').animate({
                left:-235
            },500,function(){
                $('.valueList').append($('.valueList li:first-child'));
                $('.valueList').css('left','0');
            })
        }
    })
}) 