$(document).ready(function(){
    /*point click*/
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
    
    /*첫화면*/
    $('.mainMockup').css('left','0')
    $('#home').css('background-color','rgba(0,0,0,0.6)')
    $('.headerLogo, .gnb ul li a, .hello h3, .hello .scroll').css('color','#fff')
    $('.hello .mouse').css('border','2px solid #fff')
    $('.hello .mouseWhill').css('background-color','#fff')
    $('.my .enName, .hello h3').css('opacity','1')

    /*scroll*/
    var nav=$('#point a')
    var cont=$('.point')
    var home=$('#home')
    var about=$('#about')
    
    $(window).scroll(function(){
        var winScroll=$(this).scrollTop()+$(window).height();
        
        if(winScroll >= about.offset().top + about.height()/2){
            about.find('.my').css('opacity','1')
            about.find('.profileList').css('opacity','1')
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