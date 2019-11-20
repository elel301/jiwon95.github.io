$(document).ready(function(){
        
        var scrollEvent=false; //한번씩만 적용시키기위해 참거짓값을 주는 변수선언
        var num=0; //얼마만큼 내렷는지 세기위함?? ?
        
        $('body,html').on('mousewheel', function(e){//body,html의 mousewheel의 event중 originalEvent안의 wheelDelta
            e.preventDefault();
//            console.log(e)
            var m=e.originalEvent.wheelDelta; //브라우저의 휠기능을 차단시키고 마우스휠을 한번 움직였을때의 정량적인 데이터 wheelDelta값을 담는다
//            console.log(m) //-120 +120
            var sb=$('#section1').height() //영역의 높이값
//            console.log(sb) //748
            
            if(m > 1 && scrollEvent == false && num >= 1){//m이 1보다크면, scrollEvent가 false이면, num이 1보다 크거나 같다면
//                console.log(num)
                scrollEvent=true;
                num--;
                $('html, body').stop().animate({
                    scrollTop:sb*num
                },{duration:300, complete:function(){
                    scrollEvent=false;
                    }
                })
            }else if(m < 1 && scrollEvent == false && num < 3){
//                console.log(num)
                scrollEvent=true;
                num++;
                $('html, body').stop().animate({
                    scrollTop:sb*num
                },{duration:300, complete:function(){
                    scrollEvent=false;
                    }
                })     
            }
            
        })
    
    /*visual*/
    function visualSet(){
        $('.visualctrl .visualNext').trigger('click')
    }
    var st=setInterval(visualSet,10000)
    
    $('.visualPoint a').click(function(e){
        e.preventDefault()
        visual($(this).index())
    })
    
    $('.visualSmallImg li').click(function(e){
        e.preventDefault()
        visual($(this).index())
    })
    
    $('.visualctrl .visualPrev').click(function(e){
        e.preventDefault()
        visual($('.visualPoint a.on').index()-1)
    })
    
    $('.visualctrl .visualNext').click(function(e){
        e.preventDefault()
        visual($('.visualPoint a.on').index()+1)
    })
    
    function visual(num){
        if($('.visualPoint a.on').index()!=num){
            if(num>2)num=0;
            else if(num<0)num=2;
            $('.visualBigImg a.on').fadeOut(500).removeClass('on')
            $('.visualBigImg a:eq('+num+')').fadeIn(300).addClass('on')

            $('.visualSmallImg li.on').removeClass('on')
            $('.visualSmallImg li:eq('+num+')').addClass('on')
            $('.visualSmallImg li a').css('transition','background-color 1s ease')

            $('.visualPoint a.on').removeClass('on')
            $('.visualPoint a:eq('+num+')').addClass('on')
            $('.visualPoint a').css('transition','width 0.5s ease')

            $('.visualText a.on').removeClass('on')
            $('.visualText a:eq('+num+')').addClass('on')
        }
    }
    
    /*special*/
    var speacialImg1=["image/special_img1.jpg","image/special_img3.jpg","image/special_img4.jpg"]
    var speacialImg2=["<a href=\"#\"><img src=\"image/special_img2.jpg\" alt=\"Unlimited Bar\"/></a>","",""]
    var strong=["Unlimited Bar","cafe BYUL BED","Rooftop BYUL KAI"]
    var speacialText=["hotel1은 식재료를 철저하게 엄선하며<br/>매일 아침부터 저녁까지 다양하고 정성스러운<br/>뷔페 요리로 손님들을 모시고 있습니다.<br/>행사의 목적과 요구에 맞춘 고객 맞춤 서비스로<br/>최상의 만족감을 선사해드립니다.","hotel1에서만 만나보실 수 있는 별침대입니다.<br/>연인들과 혹은 개인이 바다 전망과 함께<br/>휴식을 즐기실 수 있도록 편안한 의자와 침대가<br/>1층과 2층 모두 준비되어 있으며,<br/>내방 같은 안락함을 느끼실 수있습니다.<br/>썬베드에 누워 광안 해수욕장을 바라보며<br/>아름다운 전경을 즐기실수 있는 공간입니다.","hotel1에서만 만나보실 수 있는 별카이입니다.<br/>하늘과 바다가 보이는 경이로운 전망입니다.<br/>여유로운 공간을 추구한 합리적인 인테리어가<br/>돋보이는 테라스입니다.<br/>특별한 분위기와 함께 자유롭고 편안하게<br/>공간을 이용하실 수 있습니다."]
    
    $('.specialList li').click(function(e){
        e.preventDefault()
        special($(this).index())
    })
    
    function special(dis){
        if($('.specialList li.on').index()!=dis){
            $('.specialList li.on').removeClass('on')
            $('.specialList li:eq('+dis+')').addClass('on')

            var html="<div class=\"specialImg\">"
            html+="<a href=\"#\"><img src="+speacialImg1[dis]+" alt="+strong+"/></a>"
            html+=speacialImg2[dis]
            html+="</div>"
            html+="<div class=\"specialText px18\">"
            html+="<a href=\"#\">"
            html+="<strong>"+strong[dis]+"</strong>"
            html+=speacialText[dis]
            html+="</a>"
            html+="</div>"

            $('.specialImg').remove()
            $('.specialText').remove()
            $('.special').append(html)
        }
    }

    /*HotPlace*/
    $('.Placectrl a:eq(0)').click(function(e){
        e.preventDefault()
        placePrev()
    })
    $('.Placectrl a:eq(1)').click(function(e){
        e.preventDefault()
        placeNext()
    })
    
    function placePrev(){
        if($('.PlaceList').is(':animated')==false){
            $('.PlaceList').prepend($('.PlaceList li:last'))
            $('.PlaceList').css('left','-400px')
            $('.PlaceList').animate({
                'left':0
            },600)
        }
    }
    
    function placeNext(){
        if($('.PlaceList').is(':animated')==false){
            $('.PlaceList').animate({
                'left':'-400px'
            },600,function(){
                $('.PlaceList').css('left','0')
                $('.PlaceList').append($('.PlaceList li:first'))
            })
        }
    }
})