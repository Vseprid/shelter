import { appendCards, cardsInf } from '../../script/insert-cards.js';

export const scrollButtons = document.querySelectorAll('.scroll__arrow');

export const carousel = button => {
    button.addEventListener('click', () => {
        button.id === 'scroll-right' ? cardsInf.offset++ : cardsInf.offset--;
        appendCards(cardsInf.cardsWrapper, button.id)
    })
}