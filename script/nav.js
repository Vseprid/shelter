export const burger = document.querySelector(".header__burger");
const cover = document.querySelector('.cover')
const navigation = document.querySelector(".nav");
const links = navigation.querySelectorAll('.nav__a')

export function switchNav() {
  if (navigation.classList.contains('active')) navigation.style.position = 'fixed'

    navigation.classList.toggle("active");
    burger.classList.toggle("active");
    cover.classList.toggle('active');

  navigation.addEventListener('transitionend', (e) => {
    if (navigation.classList.contains('active')) navigation.style.position = 'absolute'
  })

  links.forEach(link => link.addEventListener('click', closeNav))
  cover.addEventListener('click', closeNav)
}

function closeNav() {
  navigation.classList.remove("active");
    burger.classList.remove("active");
    cover.classList.remove('active');
}