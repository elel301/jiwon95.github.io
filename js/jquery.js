$(document).ready(function(){
    var projectTop=$('#project').offset().top;
    var aboutTop=$('#about').offset().top;
    
    $('.project').click(function(){
        $('html,body').animate({
            scrollTop:projectTop
        },1000)
    })
    $('.about').click(function(){
        $('html,body').animate({
            scrollTop:aboutTop
        },1000)
    })
    
    $('.viewOpen').click(function(e){
        e.preventDefault();
        $('.View ul li').removeClass('on');
        $('.View ul li:first-child').addClass('on');
        $('.View ul li > div').hide();
        $('.View ul li.on > div').show();
        
        $('.View').css('display','none');
        $(this).parent().parent().find('.View').css('display','block');
        $('.dim').css('display','none');
        $(this).parent().parent().next('.dim').css('display','block');
    })
    
    $('.viewClose').click(function(e){
        e.preventDefault();
        $(this).parent().css('display','none');
        $(this).parent().parent().next('.dim').css('display','none');
    })
    
    $('.View ul li').click(function(e){
        e.preventDefault();
        
        $('.View ul li').find(' > div').hide();
        $(this).find(' > div').show();
        $('.View ul li.on').removeClass('on');
        $(this).addClass('on');
    })
    
    $('#point a').click(function(e){
        e.preventDefault();
        var pointNum=$(this).index();
        var Section=$('.point').eq(pointNum);
        var SectionTop=Section.offset().top;
        
        $("html,body").animate({
            scrollTop:SectionTop
        },600)
        
        $('#point a').removeClass('on');
        $(this).addClass('on');
    })
    
    $('.mainMockup').css('left','0')
    $('#home').css('background-color','rgba(0,0,0,0.5)')
    $('.headerLogo, .gnb ul li a, .hello h3, .hello .scroll').css('color','#fff')
    $('.hello .mouse').css('border','2px solid #fff')
    $('.hello .mouseWhill').css('background-color','#fff')
    $('.my .enName').css('opacity','1')
    var nav=$('#point a')
    var cont=$('.point')
    var home=$('#home')
    var about=$('#about')

    $(window).scroll(function(){
        var winScroll=$(this).scrollTop()+$(window).height();
        
        if(winScroll >= about.offset().top + about.height()/2){
            about.find('.my').css('opacity','1')
            about.find('.Profile').css('opacity','1')
            about.find('.percent div span.on').css({
                'opacity':'1',
                'margin-left':'0'
            })
            about.find('.my h3 span').css({
                'opacity':'1',
                'width':'33.3%',
                'height':'100%'
            })
        }
        
        $('#project > section').each(function(){
            var projectNum=$(this).index();
            var project=$('#project > section').eq(projectNum);
            var projectTop=project.offset().top;
            
            if(winScroll >= projectTop + project.height()/3){
                project.find('.projectTxt').css('opacity','1')
                project.find('.mockup').css('opacity','1')
            }
        })
        
        for(var i=0; i<cont.length; i++){
            if(winScroll >= cont.eq(i).offset().top + cont.height()/3){/*전체높이값*/
            nav.removeClass('on');
            nav.eq(i).addClass('on');
            }
        }
    })
    
})