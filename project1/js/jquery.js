$(document).ready(function(){
    /*gnb click*/
    $('.gnb1depth').hide();
    $('.gnb2depth').hide();
    $('.gnbMenu > li > a').click(function(e){
        e.preventDefault();
        if($(this).parent().hasClass('on') == false){
            $('.gnbMenu > li').removeClass('on');
            $(this).parent().addClass('on');
            $('.gnbMenu > li').find('.gnb1depth').hide();
            $(this).next('.gnb1depth').show();
            $('.gnbMenu > li').find('.gnb1depth > li').removeClass('on');
            $('.gnbMenu > li').find('.gnb2depth').hide();
        }else{
            $('.gnbMenu > li').removeClass('on');
            $('.gnbMenu > li').find('.gnb1depth').hide();
            $('.gnbMenu > li').find('.gnb1depth > li').removeClass('on');
            $('.gnbMenu > li').find('.gnb2depth').hide();
        }
    })
    
    $('.gnb1depth > li > a').click(function(e){
        e.preventDefault();
        $('.gnb1depth > li').removeClass('on');
        $(this).parent().addClass('on');
        $('.gnb1depth > li').find('.gnb2depth').hide();
        $(this).next('.gnb2depth').show();
    })
    
    $('.M_menuIcon').click(function(){ //모바일 메뉴 열고닫기
        $('.gnbMenu > li').find('.gnb1depth').hide();
        $('.gnbMenu > li').find('.gnb2depth').hide();
        $('.gnbMenu > li').find('.gnb1depth > li').removeClass('on');
        $('.gnbMenu > li').removeClass('on');
        
        $('html').css('overflowY','hidden')
        $('#gnb').animate({
            'left':'0'
        })
        $('.gnb1depth').animate({
            'left':'100%'
        })
        $('#gnb').next().addClass('dim')
    })
    
    $('.M_Close').click(function(){
        $('html').css('overflowY','auto')
        $('.gnb1depth').animate({
            'left':'0%'
        })
        $('#gnb').animate({
            'left':'-30%'
        })
        $('#gnb').next().removeClass('dim')
    })
    
    /*searchAuto*/
    $('#searchText').click(function(){
        $(this).val('');
    })
    
    var searchSt=setInterval(searchAuto,5000);
    var num=0;
    
    function searchAuto(){
        var searchText=['바캉스 준비 WITH FILA','MY COLOR? 아웃핏 팔레트','온라인단독! 래비지먼트2000','뉴라이징! 스크립트VER.','고르는재미 FILA RGB'];
        num++;
        if(num>4)num=0
        $('#searchText').val(searchText[num]);
    }
    $('#searchText').click(function(){
        clearInterval(searchSt);
        $('#searchText').val('');
    })
    
        
    /*visualAuto*/
    $('.gauge li:eq(0)').addClass('on');
    var visualSt=setInterval(visualAuto,7000);

    function visualAuto(){
        $('.visual .rightBtn').trigger('click')
    }
    
    $('.visual .leftBtn').click(function(e){
        e.preventDefault();
        visualGauge($('.visual .gauge > li.on').index()-1);
    })
    
    $('.visual .rightBtn').click(function(e){
        e.preventDefault();
        visualGauge($('.visual .gauge > li.on').index()+1);
    })
    
    $('.visual .gauge li').click(function(e){
        e.preventDefault();
        visualGauge($(this).index());
    })
    
    function visualGauge(dis){
        if(dis>4)dis=0
        else if(dis<0)dis=4
        $('.gauge li.on').removeClass('on');
        $('.gauge li:eq('+dis+')').addClass('on');
        
        $('.visualList li.on').fadeOut().removeClass('on');
        $('.visualList li:eq('+dis+')').fadeIn().addClass('on');
    }
    
    $(window).resize(function(){ //윈도우 너비 감지
    var winWidth=$(window).width(); //윈도우 너비값
    
    if(winWidth <= 640){ //visual 너비감지하여 이미지 변경
        $('.visualList li img').each(function(){        
            $(this).attr('src',$(this).attr('src').replace('big.jpg','small.jpg'))
        })
    }else if(winWidth > 641){
        $('.visualList li img').each(function(){        
            $(this).attr('src',$(this).attr('src').replace('small.jpg','big.jpg'))
        })
    }
        
    
    /*bestItem*/
    $('.point li.M_point').css('display','none')
    
    if(winWidth >= 769){ //width값에 따른 bestItem point갯수
        $('.bestItem .point li.M_point').css('display','none')
    }else if(winWidth <= 768 && winWidth >= 361){
        $('.bestItem .point li.px768').css('display','inline-block')
    }else if(winWidth <= 360){
        $('.bestItem .point li.px640').css('display','inline-block')
    }
        
    var num=0; //num값 초기화
    
    $('.bestItem .leftBtn').click(function(e){
        e.preventDefault();
        bestitemList($('.bestItem .point li.on').index()-1);
    })
    
    $('.bestItem .rightBtn').click(function(e){
        e.preventDefault();
        bestitemList($('.bestItem .point li.on').index()+1);
    })
    
    $('.bestItem .point li').click(function(e){
        e.preventDefault();
        bestitemList($(this).index());
    })
    
    function bestitemList(num){
        if(winWidth >= 769){
            if(num>2)num=0
            else if(num<0)num=2
            $('.bestItemList ul').css({
                'transform':'translateX('+(-36.3636*num)+'%)'
            })
        }else if(winWidth <= 768 && winWidth >= 361){
            if(num>3)num=0
            else if(num<0)num=3
            $('.bestItemList ul').css({
                'transform':'translateX('+(-27.2727*num)+'%)'
            })
        }else if(winWidth <= 360){
            if(num>5)num=0
            else if(num<0)num=5
            $('.bestItemList ul').css({
                'transform':'translateX('+(-18.1818*num)+'%)'
            })
        }
        $('.bestItem .point li.on').removeClass('on');
        $('.bestItem .point li:eq('+num+')').addClass('on');
    }
        
    /*collection*/
    var collectionTop=$('.collection').offset().top + $('.collection').height()/2; //컬렉션 중간길이값
    $(window).scroll(function(){
        var winScroll=$(window).scrollTop()+$(window).height(); //윈도우 bottom값
        
        if(winScroll >= collectionTop){
            $('.collection .photoOn ul li').css('opacity','1')
            $('.collection .txt').css('bottom','30px')
        }else{
            $('.collection .photoOn ul li').css('opacity','0')
            $('.collection .txt').css('bottom','0')
        }
    })
        
    /*product*/
    if(winWidth >= 769){ //width값에 따른 product point갯수
        $('.product .point li.M_point').css('display','none')
    }else if(winWidth <= 768){
        $('.product .point li.px768').css('display','inline-block')
    }

    $('.productList > ul > li > span > a').click(function(e){
        e.preventDefault();
        $('.productList > ul > li > span > a').parent().parent().removeClass('on')
        $(this).parent().parent().addClass('on')
        
        $('.productList > ul > li > span > a').parent().next().hide()
        $(this).parent().next().show()
        
        $(this).parent().next().find('> ul').css('transform','translateX(0%)')
        $(this).parent().next().find('.point li.on').removeClass('on')
        $(this).parent().next().find('.point li:eq(0)').addClass('on')
    })
        
    var num=0; //num값 초기화

    $('.hotListwrap .leftBtn').click(function(e){
        e.preventDefault();
        hotList($('.hotListwrap .point li.on').index()-1);
    })  
        
    $('.hotListwrap .rightBtn').click(function(e){
        e.preventDefault();
        hotList($('.hotListwrap .point li.on').index()+1);
    })  
    
    $('.nowListwrap .leftBtn').click(function(e){
        e.preventDefault();
        nowList($('.nowListwrap .point li.on').index()-1);
    })
        
    $('.nowListwrap .rightBtn').click(function(e){
        e.preventDefault();
        nowList($('.nowListwrap .point li.on').index()+1);
    })
    
    $('.product .point li').click(function(e){
        e.preventDefault();
        hotList($(this).index());
        nowList($(this).index());
    })
    
    function hotList(num){
        if(winWidth >= 769){
            if(num>2)num=0
            else if(num<0)num=2
            $('.hotList').css({
                'transform':'translateX('+(-33.3333*num)+'%)'
            })
        }else if(winWidth <= 768){
            if(num>4)num=0
            else if(num<0)num=4
            $('.hotList').css({
                'transform':'translateX('+(-22.2222*num)+'%)'
            })
        }
        $('.hotListwrap .point li.on').removeClass('on');
        $('.hotListwrap .point li:eq('+num+')').addClass('on');
    }
        
    function nowList(num){
        if(winWidth <= 768){
            if(num>1)num=0
            else if(num<0)num=1
            $('.nowList').css({
                'transform':'translateX('+(-66.6666*num)+'%)'
            })
        }
        $('.nowListwrap .point li.on').removeClass('on');
        $('.nowListwrap .point li:eq('+num+')').addClass('on');
    }
        
    }).resize();
    
    var noticeliH=$('.notice ul li').height();
    var num=0;
    var noticeSt=setInterval(noticeAuto,5000)
    
    function noticeAuto(){
        if(num>2)num=0;
        num++;
        $('.notice ul').animate({
            top:-noticeliH
        },1000,function(){
            $('.notice ul').append($('.notice ul li:eq(0)'))
            $('.notice ul').css('top','0')
        })
    }
    
})