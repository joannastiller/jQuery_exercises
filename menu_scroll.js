$('nav a').on('click', function () {
    $('body, html').animate({
        scrollTop: $("#" + $(this).attr('class')).offset().top
    }, 500)
})