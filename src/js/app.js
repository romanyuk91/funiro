// import Swiper JS
import Swiper from 'swiper/bundle';

// header-menu
document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.classList.contains('menu-arrow')) {
        targetElement.closest('.menu-item').classList.toggle('_hover'); 
    } 
    if (targetElement.classList.contains('search-form-icon')) {
        document.querySelector('.search-form').classList.toggle('active');
    }
    if (targetElement.classList.contains('menu-icon')) {
        document.querySelector('.menu-body').classList.toggle('active');
        document.querySelector('.menu-icon').classList.toggle('active');
    }
}

// footer-menu

const footerHeaders = document.querySelectorAll('[data-name="footer-menu-title"]');
footerHeaders.forEach(function(item){
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden-menu-list'); 
    });
    if (document.querySelector('.container').clientWidth <= 768) {
        item.classList.add('_icon-arrow-down');
    } else {
        item.classList.remove('_icon-arrow-down');
    }
});

// hero-slider

new Swiper('.hero-slider-body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 32,
    watchOverflow: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 5,
    preloadImages: false,
    parallax: true,
    autoplay: {
        delay: 3500,
    },

    // Dotts
    pagination: {
        el: '.hero-slider-controls-dotts',
        clickable: true,
    },

    // Arrows
    navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
    },
});

// rooms-slider

new Swiper('.rooms-slider-body', {
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 800,
    loop: true,
    watchOverflow: true,
    loopAdditionalSlides: 5,
    preloadImages: false,
    parallax: true,
    // Dotts
    pagination: {
        el: '.rooms-slider-dotts',
        clickable: true,
    },
    // Arrows
    navigation: {
        nextEl: '.rooms-slider .slider-arrow-next',
        prevEl: '.rooms-slider .slider-arrow-prev',
    }
});

// tips-slider

new Swiper('.tips-slider-body', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 800,
    loop: true,
    watchOverflow: true,
    // Dotts
    pagination: {
        el: '.tips-slider-dotts',
        clickable: true,
    },
    // Arrows
    navigation: {
        nextEl: '.tips-slider .slider-arrow-next',
        prevEl: '.tips-slider .slider-arrow-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.1,
            spaceBetween: 15
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 32
        }
    }
})


