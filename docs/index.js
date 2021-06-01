"use strict"
const hamburger = document.querySelector('.hamburger');
const button = document.querySelector('.hamburger__button');
const menu = document.querySelector('.hamburger__menu');
const link = document.querySelector('.hamburger__menu a');

hamburger.addEventListener('click', e => {
  button.classList.contains('hamburger__button_active') ? button.classList.remove('hamburger__button_active') : button.classList.add('hamburger__button_active');
  menu.classList.contains('hamburger__menu_active') ? menu.classList.remove('hamburger__menu_active') : menu.classList.add('hamburger__menu_active');
})