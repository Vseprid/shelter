const url = '/script/pets.json';
export const cardsInf = {
    amount: 3,
    cards: [],
    offset: 0,
}

export async function setCards() {
    if (!setCards.inital) await createCards();
    setAmtCards();
    insertCards()
    setCards.inital = true;
}

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function createCards() {
    const data = await getData(url);
    const cards = data.map(cardObj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${cardObj.img}" alt="${cardObj.type} ${cardObj.name}">
        <h3 class="card__title">${cardObj.name}</h3>
        <button class="button button_light">Learn more</button>
        `;
        return card;
    });
    shuffle(cards)
    cardsInf.cards = cards;
    console.log('createCards finish')
}


function insertCards() {
    const limitCards = [];
    let section;
    for (const [index, element] of cardsInf.cards.entries()) {
        if (index % cardsInf.amount === 0) limitCards.push(section = []);
        section.push(element);
      }
    cardsInf.cardsWrapper = document.querySelector('.cards')
    cardsInf.limitCards = limitCards
    appendCards(cardsInf.cardsWrapper)
}

export function appendCards(wrapper) {
    wrapper.innerHTML = ''

    if (cardsInf.limitCards.length <= cardsInf.offset) {
        cardsInf.offset = 0;
    } else if (cardsInf.offset < 0) {
        cardsInf.offset = cardsInf.limitCards.length - 1
    }

    for (let card of cardsInf.limitCards[cardsInf.offset]) {
        wrapper.appendChild(card)
    }
}

function setAmtCards() {
    let widthBrowser = document.documentElement.clientWidth;
    if (widthBrowser > 1090) {
        cardsInf.amount = 3
    } else if (widthBrowser <= 1090 && widthBrowser > 670) {
        cardsInf.amount = 2;
        console.log(2)
    } else {
        cardsInf.amount = 1;
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
