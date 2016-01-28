console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$('.close-button').click(function () {
    $('.overlay').removeClass('overlay--cover');
});

$('#logo').click(function () {
    $('.overlay').addClass('overlay--cover');
});
