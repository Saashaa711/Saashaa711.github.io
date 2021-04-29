/*jshint esversion: 6 */

//require ('~/node_modules/owl.carousel/dist/owl.carousel.min.js');

document.addEventListener('DOMContentLoaded', () => {

	$('.owl-carousel-header').owlCarousel({
		loop:true,
		margin:0,
		dots:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		//lazyLoad: true,
		animateOut: 'fadeOut',
		responsive:{
				0:{
						items:1
				},
				600:{
						items:1
				},
				1000:{
						items:1
				}
		}
	});


});