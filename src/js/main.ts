import { burgerOpen, burgerClose } from './js-components/burger';

import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const heroSliderLeft = () => {
	new Swiper('.hero-slider__left', {
		modules: [Pagination, Autoplay],

		loop: true,

		autoplay: {
			delay: 2000,
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

const heroSliderRight = () => {
	new Swiper('.hero-slider__right', {
		modules: [Pagination, Autoplay],

		loop: true,

		autoplay: {
			delay: 2000,
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

burgerOpen();
burgerClose();

heroSliderLeft();
heroSliderRight();
