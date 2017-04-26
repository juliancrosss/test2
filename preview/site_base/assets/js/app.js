$( document ).ready(function() {
	$('#slider-ropa').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: true,
		initialSlide: 0,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		pauseOnHover: false,
		nextArrow: '<div class="custom-right"></div>',
		prevArrow: '<div class="custom-left"></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				arrows: true,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}
		]
	});
	$('#slider-juguetes').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: true,
		initialSlide: 0,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		pauseOnHover: false,
		nextArrow: '<div class="custom-right"></div>',
		prevArrow: '<div class="custom-left"></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				arrows: true,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}
		]
	});
});
