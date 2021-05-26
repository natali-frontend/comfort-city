const swiper = new Swiper(".apartments-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperProductTop = new Swiper(".swiper-product-top", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,

});

const swiperProduct = new Swiper(".swiper-product", {
    slidesPerView: 4,
    spaceBetween: 35,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperProductTop
    },
});

const swiperBasket = new Swiper(".swiper-basket", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//close
const close = document.getElementsByClassName("close")[0];
const basket = document.getElementsByClassName("basket")[0];
close.addEventListener('click', function () {
    basket.classList.remove("show")
});

// Outside click
window.addEventListener('click', function (e) {
    if (!document.getElementsByClassName('basket-inner')[0].contains(e.target) && !close.contains(e.target)) {
        basket.classList.remove("show");
    }
});