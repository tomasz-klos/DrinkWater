import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const info = document.querySelector(".info--js");
const statistics = document.querySelector(".statistics--js");
const settings = document.querySelector(".settings--js");
const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button--js");
const buttonRemove = document.querySelector(".button-remove--js");
const hideInfo = document.querySelector(".x--js");
const hideStatistics = document.querySelector(".x--statistics");
const hideSettings = document.querySelector(".x--settings");
const infoOpen = document.querySelector(".info");
const statisticsOpen = document.querySelector(".statistics");
const settingsOpen = document.querySelector(".settings");
const done = document.querySelector(".alert--js");
const alert = document.querySelector(".appalert");
const sectionStatistics = document.querySelector(".content--js");
const goalButton = document.querySelector(".goal__button--js");
const entry = localStorage.getItem(key);


const key = new Date().toLocaleString().slice(0, 10);
const keyDay = key.slice(0, 2);
const keyMonth = key.slice(3, 5);

let currentGlassCounter = 0;
let historyArticles;
let percentCounter = document.querySelectorAll(".percent-counter--js");
let percentage;


// Menu button

info.addEventListener("click", () => {
  infoOpen.classList.toggle("info--show");
});

hideInfo.addEventListener("click", () => {
  infoOpen.classList.toggle("info--show");
});

statistics.addEventListener("click", () => {
  statisticsOpen.classList.toggle("statistics--show");
});

hideStatistics.addEventListener("click", () => {
  statisticsOpen.classList.toggle("statistics--show");
});

settings.addEventListener("click", () => {
  settingsOpen.classList.toggle("settings--show");
});

hideSettings.addEventListener("click", () => {
  settingsOpen.classList.toggle("settings--show");
});

//////////////////////////////////////////////// test //////////////////////////////////


// calculate percentage based on counter value

const percentageCalc = () => {
  percentage = (currentGlassCounter / 10) * 100;
  for (let i = 0; i < percentCounter.length; i++) {
    percentCounter[i].innerHTML = `${Math.round(percentage)}%`;
  }
};
const updateUI = () => {
  if (currentGlassCounter >= 0) {
    for (let i = 0; i < glassCounter.length; i++) {
      glassCounter.innerHTML = currentGlassCounter;
    }
    localStorage.setItem(
      key,
      JSON.stringify({
        day: keyDay,
        month: keyMonth,
        value: currentGlassCounter,
      })
    );
    percentageCalc();
  } else {
    currentGlassCounter = 0;
  }
};
const increment = () => {
  currentGlassCounter++;
  updateUI();
};
const decrement = () => {
  currentGlassCounter--;
  updateUI();
};


// store value in localstorage with todays key
let result;
if (entry) {
  currentGlassCounter = JSON.parse(entry);
  if (result.day === keyDay) {
    for (let i = 0; i < glassCounter.length; i++) {
      glassCounter[i].innerHTML = result.value;
    }
    percentageCalc();
  } else {
    // if there is nothing in key, value = '0' (new day)
    localStorage.setItem(
      key,
      JSON.stringify({
        day: keyDay,
        month: keyMonth,
        value: 0,
      })
    );
  }
} else {
  for (let i = 0; i < glassCounter.length; i++) {
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(
      key,
      JSON.stringify({
        day: keyDay,
        month: keyMonth,
        value: currentGlassCounter,
      })
    );
  }
};

// Button add and remove

buttonAdd.addEventListener('click', () => {
  increment();
  glassCounter.innerHTML = currentGlassCounter;
});


buttonRemove.addEventListener('click', () => {
  decrement();
  glassCounter.innerHTML = currentGlassCounter;
});


// use history saved in localstorage and implement it into the history layout
const storageArrayEntries = Object.entries(localStorage);
for (let [key, value] of storageArrayEntries) {
  if (value !== 'INFO') {
    let cupsAmount = JSON.parse(value).value;
    const calc = () => {
      percentage = (cupsAmount / 10) * 100;
      return Math.round(percentage);
    };
    historyArticles = `<div class="statistics__element"><h2 class="statistics__title">${key.slice(0, 4)}</h2><p class="statistics__text"> Cups drunk: <span class="cups-count--js">${cupsAmount}</span></p><p class="statistics__text">Daily water intake: <span class="percentage--js">${calc()}%</span></p></div>`;
    sectionStatistics.insertAdjacentHTML('beforeend', historyArticles);
  }
};
