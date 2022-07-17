import { appendCards, cardsInf, setCards } from '../../script/insert-cards.js';
import { burger, switchNav } from '../../script/nav.js';

burger.addEventListener('click' ,() => switchNav());

window.addEventListener('load', setCards);
window.addEventListener('resize', setCards);

const scrollButtons = document.querySelectorAll('.scroll__arrow');

scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.id === 'scroll-right' ? cardsInf.offset++ : cardsInf.offset--;
        appendCards(cardsInf.cardsWrapper)
    })
})