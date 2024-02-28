$(function () {


    // 헤더 드롭다운 메뉴
    $(".h_menu li").on({
        mouseover: function () {
            // 마우스 오버했을 때
            $(".h_dmenu", this).stop().slideDown();
        },

        mouseout: function () {
            // 마우스 뗐을 때

            $(".h_dmenu", this).stop().slideUp();
        }
    });

    //  모바일 검색창
    $("header .s_btn").click(function(){
       

            $(".m_search_hidden").stop().animate({
                top:'100px'
            },1000);
    

        });


        // 모바일 서브메뉴 ham bar
    $("header .ham").click(function(){

        $(".m_submenu_hidden").stop().animate({
            right:'0'
        },2000)
    });

    $(".m_submenu_hidden .exex").click(function(){
        
        $(".m_submenu_hidden").stop().animate({
            right:'-300%'
        },2000)
    });

    // 슬라이드
    $('.slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      });

      $(".h_drop",this).on({
        mouseover: function () {
            // 마우스 오버했을 때
            $(".movemenu").stop().animate({
                opacity:'1'
            },1200);
        },

        mouseout: function () {
            // 마우스 뗐을 때

            $(".movemenu").stop().animate({
                opacity:'0'
            },1000);
        },
    })

    


////////
});

