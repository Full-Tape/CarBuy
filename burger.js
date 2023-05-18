const menu = document.querySelector(".inner__menu");
const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".inner__menu-btn");
const menuList = document.querySelector(".inner__menu-list");

menuBtn.addEventListener("click", burgerActive);
overlay.addEventListener("click", burgerActive);

function burgerActive() {
  menu.classList.toggle("inner__menu-active");
  overlay.classList.toggle("overlay-active");
  menuList.classList.toggle("inner__menu-list-active");
}
