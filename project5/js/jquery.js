$(document).ready(function(){
    $('.menuIcon').click(function(){
        if($('.gnbMenu').hasClass('on')){
            $('.gnbMenu.on').removeClass('on')
            $('.menuIcon span.close').removeClass('close')
            $('#wrapper').css('height','100%'),
            $('.CF').css('display','block')
        }else{
            $('.gnbMenu').addClass('on')
            $('.menuIcon span').addClass('close')
            $('#wrapper').css('height','100vh'),
            $('.CF').css('display','none')
        }
    })
    
    var productStrong=['시카 슬리핑 마스크(그린)','크림 스킨 퀵 스킨 팩','블루에너지 EX','프레시카밍 pH 밸런싱 클렌저','글로이 메이크업 세럼']
    var productEm=['Cica Sleeping Mask','Cream Skin Quick Skin Pack','Blue Energy EX','Fresh Calming pH Balancing Cleanser','Glowy Makeup Serum']
    var productP=['슬리핑 골든 타임에 강력한 시카 성분 ’포레스트 이스트’의 자생 효능으로 피부 본연의 힘을 길러 외부 자극에도 무너지지 않는 건강한 피부로 가꾸어주는 장벽 마스크','크림 한 통을 그대로 녹여 담은 고밀착 텐셀 시트로 즉각적인 피부 보습을 채워주는 간편한 스킨팩','바다에서 찾아낸 맑고 강인한 생명력으로 건강하고 깨끗한 남자 피부를 선사하는 라네즈옴므 블루 에너지 라인','피부 노폐물과 피지를 제거하고 수분을 공급하여 pH 밸런스를 맞추어 주는 약산성 수분 진정 딥클렌저','수분을 머금은 듯 투명하고 건강한 광채피부를 연출해주는 메이크업 밀착 부스팅 세럼']
    
    $('.productList > ul > li').click(function(e){
        e.preventDefault()
        product($(this).index())
    })
    
    function product(num){
        $('.productView img').attr('src','image/product_view'+(num+1)+'.jpg')
        
        var html="<div class=\"productText\">"
        html+="<strong class=\"px16\">"+productStrong[num]+"</strong>"
        html+="<em class=\"px10\">"+productEm[num]+"</em>"
        html+="<p class=\"px12\">"+productP[num]+"</p>"
        html+="</div>"
        
        $('.productText').remove()
        $('.productView').append(html)
    }
})