"use strict";

// АДАПТИВНОЕ МЕНЮ
const icon = document.querySelector(".icon");

if (icon) {
  const menu = document.querySelector(".header__menu");
  icon.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  });
}
// ==========================

// ВЫПАДАЮЩИЙ СПИСОК
const menuArrows = document.querySelectorAll(".arrow");

if (menuArrows.length) {
  menuArrows.forEach((menuArrow) => {
    menuArrow.addEventListener("click", function (e) {
      menuArrow.parentElement.classList.toggle("active");
    });
  });
}
// ================================
