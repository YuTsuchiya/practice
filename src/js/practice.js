
$(document).ready(function(){
    var slider_nav = $('.practice_client_slide_nav_container');

    slider_nav.slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        focusOnSelect: true,
        centerMode: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px'
                }
            }
        ],
    });
});
