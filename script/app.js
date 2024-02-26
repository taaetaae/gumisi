$(function () {

    // document.addEventListener('DOMContentLoaded',()=>{


    $(".h_menu li").on({
        mouseover: function () {
            // 마우스 오버했을 때
            $(".h_dmenu", this).stop().slideDown();
            // 높이값에 영향을 받아서 서브메뉴 전체가 천천히 내려오면서 나오게
        },

        mouseout: function () {
            // 마우스 뗐을 때

            $(".h_dmenu", this).stop().slideUp();
            // 높이값에 영향을 받아서 서브메뉴 전체가 천천히 올라가면서 사라지게
        }
    });
    // })

});

