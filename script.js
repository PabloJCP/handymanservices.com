// JavaScript Document
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});