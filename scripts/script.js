// console.log("Hello world!")
// alert("Hello world!")
// let name = prompt("Как тебя зовут?")
// alert("Привет "+name)

document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const nav = document.querySelector('.nav');

  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('open'); // Анимация кнопки бургер
    nav.classList.toggle('active');     // Показать/скрыть меню
  });
});


const btn = document.querySelector('.scrollTopBtn');

window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
