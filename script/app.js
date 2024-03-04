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
  $(".ms_btn").click(function () {

    $(".mb_search_hidden").stop().show();
    $(".sub_mtop", ".big_menu").stop().hide();

  });

  $(".ms_exex").click(function () {

    $(".mb_search_hidden").stop().hide();
    $(".sub_mtop", ".big_menu").stop().show();

  });


  // 모바일 서브메뉴 ham bar
  $("header .ham").click(function () {

    $(".m_submenu_hidden").stop().animate({
      right: '0'
    }, 1000)
  });

  $(".m_submenu_hidden .exex").click(function () {

    $(".m_submenu_hidden").stop().animate({
      right: '-300%'
    }, 1000)
  });


  // 모바일 메뉴 드롭다운 

  $(".big_menu li").on({

    mouseover:function(){
      $(".mobile_hmenu",this).stop().slideDown();
    },

    mouseout:function(){
      $(".mobile_hmenu",this).stop().slideUp();
    },


  });

  // sec2 드롭다운 메뉴
  $(".h_drop").on({
    mouseover: function () {
      // 마우스 오버했을 때
      $(".movemenu", this).stop().fadeIn();
    },

    mouseout: function () {
      // 마우스 뗐을 때

      $(".movemenu", this).stop().fadeOut();
    }
  })


  $('.mh_slide').slick({
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    dots: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,

        }
      },

      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: false

        }
      }

    ]
  });


  ////////
});



