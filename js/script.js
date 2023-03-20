// 헤더햄버거메뉴
const header = document.getElementById('header');
const navBtn = document.querySelector('.nav-btn');
const hr3Menu = document.querySelector('.hr3-menu');

navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('add');
    hr3Menu.classList.toggle('active');
    header.classList.toggle('hwhite');
})

// 헤더고정투명도변화
let $window = window;
let Hheight = header.offsetHeight;

$window.addEventListener('scroll', function () {
    if (this.pageYOffset > Hheight) {
        if (!header.classList.contains('hscroll')) {
            header.classList.add('hscroll');
        };
    } else {
        if (header.classList.contains('hscroll')) {
            header.classList.remove('hscroll');
        };
    };
})

// section1 스와이퍼
var swiper = new Swiper(".section1 .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000
    },
});

// section3 스와이퍼
var swiper2 = new Swiper(".section3 .mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        850: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});