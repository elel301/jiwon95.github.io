$(document).ready(function(){
    $(window).scroll(function(){
        var Wscroll=$(this).scrollTop();
        if(Wscroll > 0){
            $('#header').addClass('fixed')
            $('.infoWrap').css({
                'height':'0',
                'opacity':'0',
                'transition':'all 0.5s ease'
            })
        }else{
            $('#header').removeClass('fixed')
            $('.infoWrap').css({
                'height':'30px',
                'opacity':'1'
            })
        }
    })

    /*gnb*/
    $('.gnb1eth > li').mouseenter(function(){
        $(this).find('.subImg').show()
        $('.gnb2deth').show()
        $('.gnb_bg').show()
    })
    
    $('.gnb1eth > li').mouseleave(function(){
        $('.subImg').hide()
    })
    
    $('.gnb1eth').on({
        mouseenter:function(){
            $('.gnb2deth').css('display','block')
            $('.gnb_bg').css('display','block')
        },
        mouseleave:function(){
            $('.gnb2deth').hide()
            $('.gnb_bg').hide()
            $('.subImg').hide()
        }
    })
    
    /*visualSlide*/
    var visualSt=setInterval(visualSet,8000);        
    var visualWidth=parseInt($('.visualImg').css('width'));
    function visualSet(){
        $('.visualControl > .next').trigger('click')
    }
    
    $('.visualBtn > .stop').click(function(e){
        e.preventDefault();
        clearInterval(visualSt)
    })
    
    $('.visualBtn > .play').click(function(e){
        e.preventDefault();
        clearInterval(visualSt)
        visualSt=setInterval(visualSet,8000)  
    })
    
    $('.visualBtn > a.point').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')==false){
            if($(this).index() > $('.visualBtn > a.point.on').index()){
                changeNext($(this).index()-1)
            }else{
                changePrev($(this).index())
            }
        }
    })

    $('.visualControl > .prev').click(function(e){
        e.preventDefault();
        changePrev($('.visualBtn > a.point.on').index()-1)
    })
    
    $('.visualControl > .next').click(function(e){//1,2,3
        e.preventDefault();
        changeNext($('.visualBtn > a.point.on').index())
    })

    function changePrev(idx){
        if($('.visualImg.on').is(':animated')==false){
            if(idx<0)idx=2
            $('.visualBtn > .point.on').removeClass('on')
            $('.visualBtn > .point:eq('+(idx-1)+')').addClass('on')

            $('.visualImg:eq('+(idx-1)+')').css({
                'left':'-100%',
                display:'block'
            })
            
            $('.visualIntro:eq('+(idx-1)+')').css({
                'left':'-100%',
                display:'block'
            })

            $('.visualImg.on').stop().animate({
                'left':'100%'
            },1500,"swing",function(){
                $(this).removeClass('on')
            })
            
            $('.visualIntro.on').stop().animate({
                'left':'100%'
            },1500,"swing",function(){
                $(this).removeClass('on')
            })
            
            $('.visualImg:eq('+(idx-1)+')').stop().animate({
                'left':'0'
            },1500,"swing",function(){
                $(this).addClass('on')
            })
            
            $('.visualIntro:eq('+(idx-1)+')').stop().animate({
                'left':'0'
            },1500,"swing",function(){
                $(this).addClass('on')
            })
        } 
    }
    
    function changeNext(idx){
        if($('.visualImg.on').is(':animated')==false){
            if(idx>2)idx=0
            $('.visualBtn > .point.on').removeClass('on')
            $('.visualBtn > .point:eq('+idx+')').addClass('on')

            $('.visualImg:eq('+idx+')').css({
                'left':'100%',
                display:'block'
            })
            
            $('.visualIntro:eq('+idx+')').css({
                'left':'100%',
                display:'block'
            })

            $('.visualImg.on').stop().animate({
                'left':'-100%'
            },1500,"swing",function(){
                $(this).removeClass('on')
            })
            
            $('.visualIntro.on').stop().animate({
                'left':'-100%'
            },1500,"swing",function(){
                $(this).removeClass('on')
            })
            
            $('.visualImg:eq('+idx+')').stop().animate({
                'left':'0'
            },1500,"swing",function(){
                $(this).addClass('on')
            })

            $('.visualIntro:eq('+idx+')').stop().animate({
                'left':'0'
            },1500,"swing",function(){
                $(this).addClass('on')
            })
        }
    }
    
    /*performance control*/
    var performanceSt;
    function performanceSet(){
        $('.performance .right').trigger('click')
    }
    
    $('.performance .stop').click(function(e){
        e.preventDefault();
        clearInterval(performanceSt)
    })
    
    $('.performance .play').click(function(e){
        e.preventDefault();
        clearInterval(performanceSt)
        performanceSt=setInterval(performanceSet,8000)
    })
    
    $('.performance .left').click(function(e){
        e.preventDefault();
        changeLeft($('.performanceTxt.on').index())
    })
    
    $('.performance .right').click(function(e){
        e.preventDefault();
        changeRight($('.performanceTxt.on').index()+1)
    })

    function changeRight(dis){
        if($('.performanceImg').is(':animated')==false){
            if(dis>5)dis=0
            $('.performanceImg').animate({
                left:-20
            },500,function(){
                $('.performanceImg li.on').removeClass('on')
                $('.performanceImg li:eq('+1+')').addClass('on')

                $('.performanceTxt').removeClass('on')
                $('.performanceTxt:eq('+dis+')').addClass('on')

                $('.performanceImg').append($('.performanceImg li:first'))
                $('.performanceImg').css('left','0')
            })
        }
    }
    
    function changeLeft(dis){
        if($('.performanceImg').is(':animated')==false){
            if(dis<0)dis=5

            $('.performanceImg').animate({
                left:20
            },500,function(){
                $('.performanceImg li.on').removeClass('on')
                $('.performanceImg li:eq('+(-1)+')').addClass('on')

                $('.performanceTxt').removeClass('on')
                $('.performanceTxt:eq('+(dis-1)+')').addClass('on')

                $('.performanceImg').prepend($('.performanceImg li:last'))
                $('.performanceImg').css('left','0')
            })
        }
    }
    
    /*movie control*/
    var movieSt;
    function movieSet(num){
        $('.movie .right').trigger('click')
    }
    
    $('.movie .point').click(function(e){
        e.preventDefault();
        movieCycle($(this).index())
    })
    
    $('.movie .stop').click(function(e){
        e.preventDefault();
        clearInterval(movieSt)
    })
    
    $('.movie .play').click(function(e){
        e.preventDefault();
        clearInterval(movieSt)
        movieSt=setInterval(movieSet,3000)
    })
    
    $('.movie .left').click(function(e){
        e.preventDefault();
        movieCycle($('.movie .point.on').index()-1)
    })
    
    $('.movie .right').click(function(e){
        e.preventDefault();
        movieCycle($('.movie .point.on').index()+1)
    })
    
    function movieCycle(num){
        if(num>2)num=0
        else if(num<0)num=2
        $('.movieList').css({
            left:-1228*num
        })
        $('.movie .point.on').removeClass('on')
        $('.movie .point:eq('+num+')').addClass('on')
    }
    
    /*class control*/
    var num=0;
    var classSt;
    function classSet(){
         $('.class .right').trigger('click')
    }
    
    $('.class .stop').click(function(e){
        e.preventDefault();
        clearInterval(classSt)
    })
    
    $('.class .play').click(function(e){
        e.preventDefault();
        clearInterval(classSt)
        classSt=setInterval(classSet,3000)
    })
    
    $('.class .left').click(function(e){
        e.preventDefault();
        classLeft()
    })
    
    $('.class .right').click(function(e){
        e.preventDefault();
        classRight()
    })
    
    function classLeft(){
        num--;
        if(num<0)num=2
        $('.class .currentNum').text(num+1)
        $('.classList').css({
            left:-1230*num
        })
    }
    
    function classRight(){
        num++;
        if(num>2)num=0
        $('.class .currentNum').text(num+1)
        $('.classList').css({
            left:-1230*num
        })
    }
    
    /*notice control*/
    $('.noticeList:gt(0)').hide()
    $('.noticemore:gt(0)').hide()
    $('.notice > li').click(function(e){
        e.preventDefault()
        $('.notice > li').removeClass('on')
        $(this).addClass('on')
        
        $('.notice li').find('.noticemore').hide()
        $(this).find('.noticemore').show()
        
        $('.notice li').find('.noticeList').hide()
        $(this).find('.noticeList').show()
    })
    
})