import Swiper, { Navigation, Pagination } from 'swiper';

const setSliders = () => {
    const swiper1 = new Swiper('.swiper-1', {
        width: 276,
        loop: true,
        autoplay: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            769: {
                width: 320,
            }
        }
    });

    const swiper2 = new Swiper('.swiper-2', {
        width: 276,
        loop: true,
        autoplay: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            769: {
                width: 320,
            }
        }
    });

    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;
}

export { setSliders }
