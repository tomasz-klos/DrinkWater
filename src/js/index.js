import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const info = document.querySelector(".info--js");
const statistics = document.querySelector(".statistics--js");
const settings = document.querySelector(".settings--js");
const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button--js");
const buttonRemove = document.querySelector(".button-remove--js");
const key = new Date().toLocaleString().slice(0, 10);
const hideInfo = document.querySelector(".x--js");
const hideStatistics = document.querySelector(".x--statistics");
const hideSettings = document.querySelector(".x--settings");
const infoOpen = document.querySelector(".info");
const statisticsOpen = document.querySelector(".statistics");
const settingsOpen = document.querySelector(".settings");
const done = document.querySelector(".alert--js");

let currentGlassCounter = 0;

const localeStorageValue = localStorage.getItem(key);

if (localeStorageValue) {
    currentGlassCounter = localeStorageValue;
} else {
    localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlassCounter;

// Button add and remove

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

// Menu button

info.addEventListener("click", () => {
    infoOpen.classList.toggle("info--show");

});

hideInfo.addEventListener('click', () => {
    infoOpen.classList.toggle("info--show");
});

statistics.addEventListener("click", () => {
    statisticsOpen.classList.toggle("statistics--show");

});

hideStatistics.addEventListener('click', () => {
    statisticsOpen.classList.toggle("statistics--show");
});

settings.addEventListener("click", () => {
    settingsOpen.classList.toggle("settings--show");

});

hideSettings.addEventListener('click', () => {
    settingsOpen.classList.toggle("settings--show");
});


// test


