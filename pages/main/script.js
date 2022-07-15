import { burger, switchNav } from '../../script/nav.js'

burger.addEventListener('click' ,() => switchNav());

const url = '/script/pets.json'

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

getData(url)