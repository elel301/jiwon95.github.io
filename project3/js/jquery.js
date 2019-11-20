$(document).ready(function(){
    /*search*/
    $('.searchBox').focus(function(){
        if($(this).val("검색어를 입력하세요")){
            $(this).val("");
        }
    })
    $('.searchBtn').click(function(){
        if($('.searchBox').val()==""||$('.searchBox').val()=="검색어를 입력하세요"){
            alert('검색어를 입력하세요');
            $('.searchBox').focus();
            $('.searchBox').val();
            
        }
    })
    
    /*gnb*/
    $('.gnbMenu > li').on({
        mouseenter:function(){
            $('.gnb1eth').css('display','block');
            $('.gnbbg').css('display','block');
            $(this).find('> a').css('color','#0362ff');
        },
        mouseleave:function(){
            $('.gnb1eth').css('display','none');
            $('.gnbbg').css('display','none');
            $(this).find('> a').css('color','#555');
        }
    })
    
    /*visual img slide*/
    var num=0;
    var visualAuto=setInterval(visualSet,5000);
    function visualSet(){
        $('.visualNext').trigger('click');
    }

    $('.visualPrev').click(function(e){
        e.preventDefault();
        if($('.visualImg').is(':animated')==false){
            num--;
            if(num<0)num=2;
            $('.visualCurrent > a > span').text(num+1);

            $('.visualImg').prepend($('.visualImg li:last'));
            $('.visualImg').css('left','-795px');
            $('.visualImg').stop().animate({
                left:0
            },1000)
        }
    })
    
    
    $('.visualNext').click(function(e){
        e.preventDefault();
        if($('.visualImg').is(':animated')==false){
            num++;
            if(num>2)num=0;
            $('.visualCurrent > a > span').text(num+1);
            $('.visualImg').stop().animate({
                left:-795
            },1000,function(){
                $('.visualImg').append($('.visualImg li:first'));
                $('.visualImg').css('left','0');
            })
        }
    })
    
    /*noticeList*/
    $('.noticeList:gt(0)').hide()
    $('.noticeMenu > li').click(function(e){
        e.preventDefault();
        $('.noticeMenu > li').find('.noticeList').hide();
        $(this).find('.noticeList').show();
    })
    
    /*qnaList*/
    $('.qnaList').hide();
    $('.qnaMenu li').on({
        mouseenter:function(){
            $(this).find('.Icon').hide();
            $(this).find('.qnaList').fadeIn(300);
        },
        mouseleave:function(){
            $(this).find('.Icon').fadeIn(300);
            $(this).find('.qnaList').hide();     
        }                
    })
    
    /*aside img slide*/
    var dis=0;
    function currentNum(){
        $('.asideCurrent > a > span').text(dis+1);
    }
    
    $('.asidePrev').click(function(e){
        e.preventDefault();
        if($('.asideImg').is(':animated')==false){
            dis--;
            if(dis<0)dis=2
            $('.asideImg').prepend($('.asideImg li:last'));
            $('.asideImg').css('left','-390px');
            $('.asideImg').animate({
                left:0
            },1000)
            currentNum();
        }            
    })
    
    $('.asideNext').click(function(e){
        e.preventDefault();
        if($('.asideImg').is(':animated')==false){
            dis++;
            if(dis>2)dis=0;
            $('.asideImg').stop().animate({
                left:-390
                },1000,function(){
                    $('.asideImg').append($('.asideImg li:first'));
                    $('.asideImg').css('left','0');
            })
            currentNum();
        }
    })
    
    /*bannerList*/
    var bannerAuto=setInterval(bannerSet,3000);
    function bannerSet(){
        $('.bannerNext').trigger('click');
    }
    
    $('.bannerPrev').click(function(e){
        e.preventDefault();
        if($('.bannerList').is(':animated')==false){
            $('.bannerList').prepend($('.bannerList li:last'))
            $('.bannerList').css('left','-208px');
            $('.bannerList').animate({
                left:0
            })
        }
    })
    
    $('.bannerNext').click(function(e){
        e.preventDefault();
        if($('.bannerList').is(':animated')==false){
            $('.bannerList').stop().animate({
                left:-208
            },function(){
                $('.bannerList').append($('.bannerList li:first'));
                $('.bannerList').css('left','0');
            })
        }
    })
})