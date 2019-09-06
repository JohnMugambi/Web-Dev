$(function () {

    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
    // smooth scrolling
    $('nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 3000, 'easeInOutExpo');
        event.preventDefault();
        
    });
});