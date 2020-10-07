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
const selectGoal = document.querySelector(".dailygoal--js");

const key = new Date().toLocaleString().slice(0, 10);
const keyDay = key.slice(0, 2);
const keyMonth = key.slice(3, 5);


let historyArticles;
let percentCounter = document.querySelectorAll(".percent-counter--js");
let percentage;

let currentGlassCounter = 0;

const idGoal = document.getElementById("dailygoal");
const resultgoal = idGoal.options[idGoal.selectedIndex].value;

const keyselect = localStorage.getItem("select", dailygoal)
const idSelected = idGoal.selectedIndex;



///////////////////////////////////////////
// Goal settings

let myGoal = localStorage.getItem("select");

function addValue() {
  localStorage.setItem("select", myGoal);
}

function save() {
  localStorage.getItem("select", myGoal);
}

goalButton.addEventListener("click", () => {
  let dailygoal = selectGoal.value;
  console.log(dailygoal);
  localStorage.setItem("select", dailygoal);

  save();
  console.log(myGoal);
});




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
  percentage = (currentGlassCounter / myGoal) * 100;
  for (let i = 0; i < percentCounter.length; i++) {
    percentCounter[i].innerHTML = `${Math.round(percentage)}%`;
  }
  if (percentage >= 100) {
    done.classList.add("appalert__alert--show");
  } else if(percentage < 100) {
    done.classList.remove("appalert__alert--show");
}
};




const updateUI = () => {
  if (currentGlassCounter >= 0) {
    for (let i = 0; i < glassCounter.length; i++) {
      glassCounter[i].innerHTML = currentGlassCounter;
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

const entry = localStorage.getItem(key);

let result;
if (entry) {
  result = JSON.parse(entry);
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
    glassCounter[i].innerHTML = currentGlassCounter;
    localStorage.setItem(
      key,
      JSON.stringify({
        day: keyDay,
        month: keyMonth,
        value: currentGlassCounter,
      })
    );
    glassCounter[i].innerHTML = currentGlassCounter;
  }
};

// Button add and remove

buttonAdd.addEventListener('click', () => {
  save();
  increment();
  glassCounter.innerHTML = currentGlassCounter;
  console.log("select");
  console.log(myGoal);
  console.log(percentage)
});


buttonRemove.addEventListener('click', () => {
  save();
  decrement();
  glassCounter.innerHTML = currentGlassCounter;
  console.log("select");
  console.log(myGoal);
  console.log(percentage)
});


// use history saved in localstorage and implement it into the history layout


const storageArrayEntries = Object.entries(localStorage);
for (let [key, value] of storageArrayEntries) {
  if (value !== 'INFO') {
    if (key !== 'select') {
    let cupsAmount = JSON.parse(value).value;
    const calc = () => {
      percentage = (cupsAmount / myGoal) * 100;
      return Math.round(percentage);
    };
    historyArticles = `<div class="statistics__element"><h2 class="statistics__title">${key.slice(0, 4)}</h2><p class="statistics__text"> Wypite szklanki: <span class="cups-count--js">${cupsAmount}</span></p><p class="statistics__text">Dzienny cel: <span class="percentage--js">${calc()}%</span></p></div>`;
    sectionStatistics.insertAdjacentHTML('beforeend', historyArticles);
  }
}
};

let effect;
if (entry) {
  effect = JSON.parse(entry);
  currentGlassCounter = result.value;
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
};

glassCounter.innerHTML = currentGlassCounter;


/////// SETTINGS ////
