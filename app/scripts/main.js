
(function() {
    $('.close-button').click(function () {
        console.log('close button working?');
        $('.overlay').removeClass('overlay--cover');
    });

    $('#logo').click(function () {
        console.log('logo working');
        $('.overlay').addClass('overlay--cover');
        // $('.modal-box[modal-data="lightbox"]').addClass('modal-box--cover');
    });

    $('.glyphicon-subtitles').click(function () {
        $('.image__description').toggleClass('show');
    });

    // $('.metadata-nav a').click(function () {
    //     var tabPos = $(this).index();
    //     console.log(tabPos);
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    //
    //     $('.metadata__tab--phone').removeClass('active').eq(tabPos).addClass('active');
    // });

    $('#signin-btn, #signin-btn-phone').click(function () {
        $('.overlay').addClass('overlay--cover');
        $('.modal-box[modal-data="login"]').addClass('modal-box--cover');
    });
})();
