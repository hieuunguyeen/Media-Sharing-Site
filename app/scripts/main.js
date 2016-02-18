(function () {
    $('button[id^=signin-btn]').click(function () {
        $('body').addClass('body--overlay');
        $('.modal--login').addClass('modal-box--cover');
    });

    $('button[id^=upload-btn]').click(function () {
        $('body').addClass('body--overlay');
        $('.modal--upload').addClass('modal-box--cover');
    });

    // Change Active state of nav
    $('#nav-panel i').click(function() {
        $(this).closest('div').find('i').removeClass('active');
        $(this).addClass('active');
    });
})();
