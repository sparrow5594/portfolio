$(document).ready(function () {

    // 클릭시 해당위치로 이동
    $('.move').click(function(){
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
    });


    // 모바일 메뉴 탭 열고닫기
    let hd_row = $('.header__row');

    $('.m_menu').click(function(){
        event.preventDefault();
        if ( $('.header').css('display') == 'none') {
            $('.header').css('display', 'block');
        } else {
            $('.header').css('display', 'none');
        }
    });

    window.addEventListener('resize', function(){
        if (window.innerWidth > 768) {
            $('.header').css('display','block');
        } else {
            $('.header').css('display', 'none');
        };
    });


    // dark모드

    let nav = $('.nav__move > li > a');
    
    $('.light-mode').click(function(){
        event.preventDefault();
        $(this).css('display', 'none');
        $('.dark-mode').css('display', 'block');
        $('.wrap').css('background-color', '#282b33');
        nav.addClass('move-color2');
        nav.removeClass('move-color1');
        $('.name').addClass('name-color2');
        $('.name').removeClass('name-color1');
        $('.font-color1').css('color', '#999');
        $('.font-color2').css('color', '#ec99a9');
        $('.font-color3').css('color', '#ededed');
        $('.bg-color1').css('background-color', '#f7d3e4');
        $('.view').css('border', '0.4rem solid #f7d3e4');
        $('.qr').css('box-shadow', '5vw 5vw #f7d3e4');
    });

    // light 모드
    $('.dark-mode').click(function(){
        event.preventDefault();
        $(this).css('display', 'none');
        $('.light-mode').css('display', 'block');
        $('.wrap').css('background-color', 'white');
        nav.addClass('move-color1');
        nav.removeClass('move-color2');
        $('.name').removeClass('name-color2');
        $('.name').addClass('name-color1');
        $('.font-color1').css('color', '#222');
        $('.font-color2').css('color', '#5192ff');
        $('.font-color3').css('color', '#888');
        $('.bg-color1').css('background-color', '#92baff');
        $('.view').css('border', '0.4rem solid #5192ff');
        $('.qr').css('box-shadow', '10vw 10vw #5192ff');
    });

    // home 텍스트 타이핑 효과
    let content = "Web Publisher & Developer"
    let text = document.querySelector(".typing-text")
    let i = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt;
            i++;
        }
    }
    setInterval(typing, 70);

    // 스위퍼
    let swiper = new Swiper(".swiper", {
        spaceBetween: 80,
        // centeredSlides: true,
        speed: 700,
        loop: true,
        loopAdditionalSlides: 1,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });

    // swiper 호버시 내용 
    $('.swiper-slide').mouseenter(function(){
        $(this).find('.slide__content').each(function(){
            $(this).css('display', 'block');
        });
    });
    $('.swiper-slide').mouseleave(function(){
        $(this).find('.slide__content').each(function(){
            $(this).css('display', 'none');
        });
    });



});