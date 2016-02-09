
(function() {
    $('button[id^=signin-btn]').click(function () {
        $('body').addClass('body--overlay');
        $('.overlay').addClass('overlay--cover');
        $('.modal--login').addClass('modal-box--cover');
    });

    $('#upload-btn').click(function () {
        $('body').addClass('body--overlay');
        $('.overlay').addClass('overlay--cover');
        $('.modal--upload').addClass('modal-box--cover');
    });
    $('#upload-btn-phone').click(function () {
        $('body').addClass('body--overlay');
        $('.overlay').addClass('overlay--cover');
        $('.modal--upload').addClass('modal-box--cover');
    });
})();
