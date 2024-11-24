import { burgerOpen, burgerClose } from './js-components/burger';

import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const heroSliderLeft = () => {
	new Swiper('.hero-slider__left', {
		modules: [Pagination, Autoplay],

		loop: true,

		// autoplay: {
		// 	delay: 2000,
		// },

		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
	});
};

const heroSliderRight = () => {
	new Swiper('.hero-slider__right', {
		modules: [Pagination, Autoplay],

		loop: true,

		// autoplay: {
		// 	delay: 2000,
		// },

		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
	});
};

burgerOpen();
burgerClose();

heroSliderLeft();
heroSliderRight();
