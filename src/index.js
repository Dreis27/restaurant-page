import './style.css';
import {loadPage} from './initialPage.js';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContacts} from './contacts.js';


window.onload = function() {
    init();
}

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contacts');
  
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContacts);
  }

function init() {
    loadPage();
    loadHome();
    addNavEvents();
  }