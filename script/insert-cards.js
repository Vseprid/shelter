const url = '/script/pets.json';
const cardsInf = {
    amount: 3,
    cards: [],
}

export async function setCards() {
    if (!inputCards.inital) await createCards();
    setAmtCards();
    insertCards()
    inputCards.inital = true;
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
    const cardsWrapper = document.querySelector('.cards')
    cardsWrapper.innerHTML = ''
    for (let card of limitCards[0]) {
        cardsWrapper.appendChild(card)
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
