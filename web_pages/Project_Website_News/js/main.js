$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });

    $('.rights .to-home').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    AOS.init();
});