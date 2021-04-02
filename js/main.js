(function ($) {
	var nav = $("nav");
	var navHeight = nav.outerHeight();

	$(".navbar-toggler").on("click", function () {
		if (!$("#mainNav").hasClass("navbar-reduce")) {
			$("#mainNav").addClass("navbar-reduce");
		}
	});

	// Preloader
	$(window).on("load", function () {
		if ($("#preloader").length) {
			$("#preloader")
				.delay(100)
				.fadeOut("slow", function () {
					$(this).remove();
				});
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$(".js-scroll").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$("body").scrollspy({
		target: "#mainNav",
		offset: navHeight,
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger("scroll");
	$(window).on("scroll", function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$(".navbar-expand-md").addClass("navbar-reduce");
			$(".navbar-expand-md").removeClass("navbar-trans");
		} else {
			$(".navbar-expand-md").addClass("navbar-trans");
			$(".navbar-expand-md").removeClass("navbar-reduce");
		}
		if ($(window).scrollTop() > top) {
			$(".scrolltop-mf").fadeIn(1000, "easeInOut");
		} else {
			$(".scrolltop-mf").fadeOut(1000, "easeInOut");
		}
	});

	// eslint-disable-next-line no-undef
})(jQuery);
