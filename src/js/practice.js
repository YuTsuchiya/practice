
$(document).ready(function(){
    var slider_nav = $('.practice_client_slide_nav_container');

    slider_nav.slick({
        autoplay: true,
        slidesToShow: 3,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '40px',
        swipeToSlide: true
    });
});
