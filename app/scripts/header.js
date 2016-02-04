$(document).ready(function () {
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
    var headerHeight = $('#phone-header').outerHeight();
    
    $(window).resize(function() {
        headerHeight = $('#phone-header').outerHeight();
    });

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(document).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > headerHeight) {
			// Scroll Down
            
        console.log(st);     
			$('#phone-header').removeClass('header-down').addClass('header-up');
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('#phone-header').removeClass('header-up').addClass('header-down');
			}
		}

		lastScrollTop = st;
	}
});