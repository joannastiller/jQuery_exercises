function changeText() {
    const scrollSize = $(document).scrollTop();
    const sectionSize1 = $('.section1').height();
    const sectionSize2 = $('.section2').height();
    const sectionSize3 = $('.section3').height();

    const distance1 = $('.section1').offset().top;
    const distance2 = $('.section2').offset().top;
    const distance3 = $('.section3').offset().top;
    const distance4 = $('.section4').offset().top;

    if (scrollSize < sectionSize1) {
        $('div.info').text('section 1')
    } else if (scrollSize < sectionSize2 + distance2) {
        $('div.info').text('section 2')
    } else if (scrollSize < sectionSize3 + distance3) {
        $('div.info').text('section 3')
    } else {
        $('div.info').text('section 4')
    }
}
$(document).on('scroll', changeText)