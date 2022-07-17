import { cardsInf } from "./insert-cards.js";

const url = '/script/pets.json';

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function createCards() {
    const data = await getData(url);
    const cards = data.map(cardObj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.addEventListener('click', toggleModal)
        card.innerHTML = `
        <img src="${cardObj.img}" alt="${cardObj.type} ${cardObj.name}">
        <h3 class="card__title">${cardObj.name}</h3>
        <button class="button button_light">Learn more</button>
        `;
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
        <img class="popup__img" src="${cardObj.img}" alt="${cardObj.type} ${cardObj.name}">
        <div class="popup__text">
            <h3 class="title popup__title">${cardObj.name}</h3>
            <h4 class="subtitle popup__subtitle">${cardObj.type} - ${cardObj.breed}</h4>
            <p class="popup__par">${cardObj.description}</p>
            <ul class="popup__list">
                <li>
                    <span><strong>Age:</strong> ${cardObj.age}</span>
                </li>
                <li>
                    <span><strong>Inoculations:</strong> ${cardObj.inoculations.join(', ')}</span>
                </li>
                <li>
                    <span><strong>Diseases:</strong> ${cardObj.diseases.join(', ')}</span>
                </li>
                <li>
                    <span><strong>Parasites:</strong> ${cardObj.parasites.join(', ')}</span>
                </li>
            </ul>
        </div>
        <div class="popup__close">
            <img src="/assets/icons/close-modal.svg" alt="">
        </div>
        `;
        return [card, popup];
    });
    shuffle(cards)
    cardsInf.cards = cards;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  function toggleModal() {
    // document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.paddingRight = '16px'
    const popup = this.nextElementSibling;
    const cover = document.querySelector('.cover');
    const buttonClose = popup.querySelector('.popup__close')
    popup.classList.add('active');
    cover.classList.add('active');
    cover.addEventListener('click', closeModal);
    buttonClose.addEventListener('click', closeModal)

    function closeModal() {
        popup.classList.remove('active');
        cover.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.documentElement.style.paddingRight = ''
    }
  }

