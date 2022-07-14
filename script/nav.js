export const burger = document.querySelector(".header__burger");

export function switchNav() {
  const navigation = document.querySelector(".nav");
  navigation.classList.toggle("active");
  burger.classList.toggle("active");
}