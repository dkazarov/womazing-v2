import { burgerOpen, burgerClose } from './js-components/burger';
import { heroSliderLeft, heroSliderRight, teamSlider } from './js-components/sliders';

const phone = document.querySelector('.action');

phone.addEventListener('mouseover', () => {
	console.log(1);
});

burgerOpen();
burgerClose();

heroSliderLeft();
heroSliderRight();

teamSlider();

