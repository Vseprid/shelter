import { carousel, scrollButtons } from '../../script/carousel.js';
import { setCards } from '../../script/insert-cards.js';
import { burger, switchNav } from '../../script/nav.js';

burger.addEventListener('click' ,() => switchNav());

window.addEventListener('load', setCards);
window.addEventListener('resize', setCards);

scrollButtons.forEach(carousel)
