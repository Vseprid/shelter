const burger = document.querySelector('.header__burger'),
    navigation = document.querySelector('.nav');

burger.addEventListener('click', () => {
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
})