/* * * * * Misc. jQuery application of design * * * * */

$(function () {
	$('.navbar-toggle').click( function() {
        $(this).add('#main-nav').toggleClass('closed');
    });

/*
    // changing the sides of the button only on load and on browser resize
	$(window).on("load resize", function() {
		topHalf();
		leftHalf();
	});

	// when scrolling vertically only top and bottom sides need to be recalculated
	$("body").scroll(function() {
		topHalf();
	});

	// toggle button class if it's in the top or bottom half of the screen
	function topHalf() {
		$(".framed-box").each(function() {
			var self = $(this),
	        offTop = self.offset().top,
	        scrTop = $(window).scrollTop(),
	        halfWindowHeight = ($(window).height())/2;

			self.toggleClass("top-half", (offTop - scrTop) < halfWindowHeight);
		});
	}

	// toggle button class if it's in left or right half of the screen
	function leftHalf() {
		$(".framed-box, h2").each(function() {
			var self = $(this),
	        offLeft = self.offset().left,
	        halfWindowWidth = ($(window).width())/2;

			self.toggleClass("left-half", offLeft < halfWindowWidth);
		});
	}
*/
});

function projectImageFeature() {
	$slides = $('.slides');

	$slider = $('.slider').glide().data('api_glide');

	$(window).setBreakpoints({
		breakpoints: [
	        895
	    ]
	});
	$(window).bind('enterBreakpoint895',function() {
		console.log('enter');

	});

	$(window).bind('exitBreakpoint895',function() {
		console.log('exit');

	});
}