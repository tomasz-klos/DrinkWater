import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const toggle  = document.getElementById("toggle");
const content = document.getElementById("content");
const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button--js");
const buttonRemove = document.querySelector(".button-remove--js");
const key = new Date().toLocaleString().slice(0, 10);

let currentGlassCounter = 0;

const localeStorageValue = localStorage.getItem(key);

if (localeStorageValue) {
    currentGlassCounter = localeStorageValue;
} else {
    localStorage.setItem(key, 0);
};

currentGlassCounter = localeStorageValue;


toggle.addEventListener("click", function() {
  content.classList.toggle("show");
});

buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);

});

buttonRemove.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
        currentGlassCounter--;
    }
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
});
