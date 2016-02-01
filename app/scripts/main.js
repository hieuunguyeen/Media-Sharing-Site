
$('.close-button').click(function () {
    $('.overlay').removeClass('overlay--cover');
});

$('#logo').click(function () {
    $('.overlay').addClass('overlay--cover');
});

$('.glyphicon-subtitles').click(function () {
    $('.image__description').toggleClass('show');
});

$('.metadata-nav a').click(function () {
    var tabPos = $(this).index();
    console.log(tabPos);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $('.metadata__tab--phone').removeClass('active').eq(tabPos).addClass('active');
});
