
(function() {
    $('button[id^=signin-btn]').click(function () {
        $('body').addClass('body--overlay');
        $('.overlay').addClass('overlay--cover');
        $('.modal--login').addClass('modal-box--cover');
    });

    $('#logo').click(function () {
        $('body').addClass('body--overlay');
        $('.overlay').addClass('overlay--cover');
        $('.modal--upload').addClass('modal-box--cover');
    });
})();
