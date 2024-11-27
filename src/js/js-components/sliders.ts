import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export const heroSliderLeft = () => {
	new Swiper('.hero-slider__left', {
		modules: [Pagination, Autoplay],

		loop: true,

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
	});
};

export const heroSliderRight = () => {
	new Swiper('.hero-slider__right', {
		modules: [Pagination, Autoplay],

		loop: true,

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
	});
};

export const teamSlider = () => {
	new Swiper('.team__slider', {
		modules: [Pagination, Autoplay, Navigation],

		loop: true,

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.team__pagination',
			clickable: true,
		},

		navigation: {
			prevEl: '.team__arrow-prev',
			nextEl: '.team__arrow-next',
		},
	});
};
