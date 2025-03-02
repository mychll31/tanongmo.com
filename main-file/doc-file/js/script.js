(function($) {
	"use strict";
	var $window = $(window);
	$window.on('load', function () {
		var $document = $(document);
		var $dom = $('html, body');
		var code = $('pre.code');
		var backToTopButton = $('#back-to-top');

		//animate to top on Page Refresh
		// $($dom).animate({
		// 	scrollTop: $($dom).offset().top
		// }, 1000);

		/*========= Anchor Menu scroll animation by click ========*/
		var scrollLink = $('.page-scroll');
		scrollLink.on('click', function(e){
			e.preventDefault();
			var target = $(this.hash);
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
			$($dom).animate({
				scrollTop: (target.offset().top -20)
			},600);
		});

		/* ======= Back to Top Button and navbar scrolling fixed ======= */
		$window.on('scroll', function () {
			if($(this).scrollTop()>= 300){
				backToTopButton.show(200);
			}else{
				backToTopButton.hide(200);
			}
		});

		$document.on('click', '#back-to-top', function () {
			$($dom).animate({
				scrollTop:0
			},1000);
		});

		/*========= Code highlight ========*/
		$(code).highlight();

		var currentYear = new Date().getFullYear();
    	$('#yearSpan').text(currentYear);

	});

})(jQuery);