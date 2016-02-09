
(function() {
    $('button[id^=signin-btn]').click(function () {
        $('body').addClass('body--overlay');
        $('.modal--login').addClass('modal-box--cover');
    });

    $('button[id^=upload-btn]').click(function () {
        $('body').addClass('body--overlay');
        $('.modal--upload').addClass('modal-box--cover');
    });
})();
