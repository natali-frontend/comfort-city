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