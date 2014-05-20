$(document).ready(function () {
    $('#scroll-arrow').click(function () {
        var scrollTopOffset = $('nav').offset().top;
        if(!scrollTopOffset) {
            scrollTopOffset = $('.vision').offset().top;
        }
        $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
