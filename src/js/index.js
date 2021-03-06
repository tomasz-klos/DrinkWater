import "../scss/main.scss";

import swal from "sweetalert";

import Chart from 'chart.js';

import "../js/Chart.js";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const statistics = document.querySelector(".statistics--js");
const settings = document.querySelector(".settings--js");
const home = document.querySelector(".home--js");
const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button--js");
const buttonRemove = document.querySelector(".button-remove--js");
const statisticsOpen = document.querySelector(".statistics");
const settingsOpen = document.querySelector(".settings");
const sectionStatistics = document.querySelector(".content--js");
const settingsButton = document.querySelector(".goal__button--js");
const selectGoal = document.querySelector(".dailygoal--js");
const dailygoalasd = document.querySelector(".statusPanel--stan");
const glassDiv = document.querySelector(".glass");
const svgHome = document.querySelector(".homeSvg--js");
const svgStatistics = document.querySelector(".statisticsSvg--js");
const svgSettings = document.querySelector(".settingsSvg--js");
const homeText = document.querySelector(".homeText--js");
const statisticsText = document.querySelector(".statisticsText--js");
const settingsText = document.querySelector(".settingsText--js");
const settingsButtonGoal = document.querySelector(".settingsButton--goal");
const settingsButtonGlass = document.querySelector(".settingsButton--glass");
const windowGoal = document.querySelector(".windowGoal--js");
const windowGlass = document.querySelector(".windowGlass--js");
const backgroundWindowGoal = document.querySelector(".backgroundWindowGoal--js");
const CancelButton = document.querySelector(".cancel--js");

const stan = document.querySelector(".stan--js");

const key = new Date().toISOString().slice(0, 10);
const keyDay = key.slice(0, 2);
const keyMonth = key.slice(3, 5);

let historyArticles;
let percentCounter = document.querySelectorAll(".percent-counter--js");
let percentage;
let currentstatus;

let currentGlassCounter = 0;

const idGoal = document.getElementById("dailygoal");
// const resultgoal = idGoal.options[idGoal.selectedIndex].value;

const keyselect = localStorage.getItem("select", dailygoal);
const idSelected = idGoal.selectedIndex;



///////////////////////////////////////////
////////////////////////////////////////////////////////// Goal settings ///////////////////////////////////////////////////////////////////////////////////////////////////////////
if (!keyselect) {
  localStorage.setItem("select", 8);
};

let option;

if(keyselect){
  for (let i=0; i<idGoal.length; i++) {
    option = idGoal.options[i];
  
    if (option.value == localStorage.getItem("select")){
       option.setAttribute('selected', true);
    };
  };
};



let myGoal = localStorage.getItem("select");

function save() {
  localStorage.getItem("select", myGoal);
};

const isChecked = document.querySelector(".inputhand");
const right = document.querySelector(".settings__right");

settingsButton.addEventListener("click", () => {
  let dailygoal = selectGoal.value;
  console.log(dailygoal);
  localStorage.setItem("select", dailygoal);
  dailygoalasd.innerHTML = dailygoal;

  if (isChecked.checked) {
    localStorage.setItem("inputValue", 1);
  } else {
    glassDiv.classList.add("glass__hand");
    localStorage.setItem("inputValue", 0);
  }
  glassDiv.classList.add("glass__hand");
  save();
  windowGoal.classList.remove("absolute__windowGoal--open");
  backgroundWindowGoal.classList.remove("absolute__backgroundWindowGoal--open");
  return false;
});

if(localStorage.getItem("inputValue") == 1){
  glassDiv.classList.remove("glass__hand");
} else {
  glassDiv.classList.add("glass__hand");
  isChecked.removeAttribute('checked');
};


////////////////////////////////////////////////// Current daily goal ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const CurrentDailyGoal = () => {
//   let stanL = myGoal * 0.25;
//   dailygoalasd.innerHTML = stanL;
// };

let stanL = myGoal;

dailygoalasd.innerHTML = stanL;

////////////////////////////////////////////////// Menu button ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

home.addEventListener("click", () => {
  statisticsOpen.classList.remove("statistics--show");
  settingsOpen.classList.remove("settings--show");
  homeText.style.opacity='1';
  statisticsText.style.opacity='0.4';
  settingsText.style.opacity='0.4';
  svgStatistics.style.opacity='0.4';
  svgSettings.style.opacity='0.4';
  statisticsText.style.opacity='0.4';
  svgHome.style.opacity='1';
});

statistics.addEventListener("click", () => {
  statisticsOpen.classList.add("statistics--show");
  settingsOpen.classList.remove("settings--show");
  statisticsText.style.opacity='1';
  homeText.style.opacity='0.4';
  settingsText.style.opacity='0.4';
  svgHome.style.opacity='0.4';
  svgSettings.style.opacity='0.4';
  svgStatistics.style.opacity='1';

});

settings.addEventListener("click", () => {
  settingsOpen.classList.add("settings--show");
  statisticsOpen.classList.remove("statistics--show");
  settingsText.style.opacity='1';
  statisticsText.style.opacity='0.4';
  homeText.style.opacity='0.4';
  svgHome.style.opacity='0.4';
  svgStatistics.style.opacity='0.4';
  svgSettings.style.opacity='1';
});

//////////////////////////////////////////////// test //////////////////////////////////

// calculate percentage based on counter value

const percentageCalc = () => {
  percentage = (currentGlassCounter / myGoal) * 100;
  for (let i = 0; i < percentCounter.length; i++) {
    percentCounter[i].innerHTML = `${Math.round(percentage)}%`;
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
    CurrentCalc();
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
}

// Button add and remove

buttonAdd.addEventListener("click", () => {
  save();
  increment();
  svgOpacityAdd();
  glassCounter.innerHTML = currentGlassCounter;
  console.log("select");
  console.log(myGoal);
  console.log(percentage);
  animateCSS('.buton--js', 'pulse');
  if (percentage == 100) {
    swal("Dobra robota!", "Udało Ci się zrealizować swój cel!", "success");
  }
});

buttonRemove.addEventListener("click", () => {
  save();
  decrement();
  svgOpacityRemove();
  glassCounter.innerHTML = currentGlassCounter;
  console.log("select");
  console.log(myGoal);
  console.log(percentage);
});

// use history saved in localstorage and implement it into the history layout

const storageArrayEntries = Object.entries(localStorage).sort((a, b) =>
  b[0].localeCompare(a[0])
);
for (let [key, value] of storageArrayEntries) {
  if (value !== "INFO" && key !== "select" && key !== "SVG" && key !== "inputValue") {
    let cupsAmount = JSON.parse(value).value;
    const calc = () => {
      percentage = (cupsAmount / myGoal) * 100;
      return Math.round(percentage);
    };
    historyArticles = `<div class="statistics__element"><h2 class="statistics__title">${key.slice(
      8,
      10
    )}.${key.slice(
      5,
      7
    )}</h2><p class="statistics__text"> Szklanki: <span class="cups-count--js">${cupsAmount}</span></p><p class="statistics__text">Dzienny cel: <span class="percentage--js">${calc()}%</span></p></div>`;
    sectionStatistics.insertAdjacentHTML("beforeend", historyArticles);
  }
}

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
}

glassCounter.innerHTML = currentGlassCounter;

const CurrentCalc = () => {
  currentstatus = currentGlassCounter * 0.25;
  stan.innerHTML = currentstatus;
};

currentstatus = currentGlassCounter * 0.25;
stan.innerHTML = currentstatus;

/////// SVG CHANGE ////

const svgElement1 = document.querySelector(".svg__1");
const svgElement2 = document.querySelector(".svg__2");
const svgElement3 = document.querySelector(".svg__3");
const svgElement4 = document.querySelector(".svg__4");
const svgElement5 = document.querySelector(".svg__5");
const svgElement6 = document.querySelector(".svg__6");

let keysvg = "SVG";
let svgarray = [0, 0, 0, 0, 0, 0];
console.log(svgarray);
const svgkey = localStorage.getItem(keysvg);

const obj = JSON.parse(svgkey);

if (obj) {
  svgElement1.style.opacity = obj.svg1;
  svgElement2.style.opacity = obj.svg2;
  svgElement3.style.opacity = obj.svg3;
  svgElement4.style.opacity = obj.svg4;
  svgElement5.style.opacity = obj.svg5;
  svgElement6.style.opacity = obj.svg6;
  svgarray[0] = obj.svg1;
  svgarray[1] = obj.svg2;
  svgarray[2] = obj.svg3;
  svgarray[3] = obj.svg4;
  svgarray[4] = obj.svg5;
  svgarray[5] = obj.svg6;
} else {
  localStorage.setItem(
    keysvg,
    JSON.stringify({
      svg1: svgarray[0],
      svg2: svgarray[1],
      svg3: svgarray[2],
      svg4: svgarray[3],
      svg5: svgarray[4],
      svg6: svgarray[5],
    })
  );
}

if (!obj){
  svgElement1.style.opacity = '0';
  svgElement2.style.opacity = '0';
  svgElement3.style.opacity = '0';
  svgElement4.style.opacity = '0';
  svgElement5.style.opacity = '0';
  svgElement6.style.opacity = '0';
};

const svgOpacityAdd = () => {
  if (percentage >= 16.5) {
    svgElement1.style.opacity = 1;
    svgarray[0] = 1;
    if (percentage >= 33.5) {
      svgElement2.style.opacity = 1;
      svgarray[1] = 1;
      if (percentage >= 50) {
        svgElement3.style.opacity = 1;
        svgarray[2] = 1;
        if (percentage >= 66.5) {
          svgElement4.style.opacity = 1;
          svgarray[3] = 1;
          if (percentage >= 83) {
            svgElement5.style.opacity = 1;
            svgarray[4] = 1;
            if (percentage >= 100) {
              svgElement6.style.opacity = 1;
              svgarray[5] = 1;
            }
          }
        }
      }
    }
  }
  localStorage.setItem(
    keysvg,
    JSON.stringify({
      svg1: svgarray[0],
      svg2: svgarray[1],
      svg3: svgarray[2],
      svg4: svgarray[3],
      svg5: svgarray[4],
      svg6: svgarray[5],
    })
  );
};

const svgOpacityRemove = () => {
  if (percentage < 100) {
    svgElement6.style.opacity = 0;
    svgarray[5] = 0;
    console.log(svgarray);
    if (percentage <= 83) {
      svgElement5.style.opacity = 0;
      svgarray[4] = 0;
      console.log(svgarray);
      if (percentage <= 66.5) {
        svgElement4.style.opacity = 0;
        svgarray[3] = 0;
        console.log(svgarray);
        if (percentage <= 50) {
          svgElement3.style.opacity = 0;
          svgarray[2] = 0;
          console.log(svgarray);
          if (percentage <= 33.5) {
            svgElement2.style.opacity = 0;
            svgarray[1] = 0;
            console.log(svgarray);
            if (percentage <= 16.5) {
              svgElement1.style.opacity = 0;
              svgarray[0] = 0;
              console.log(svgarray);
            }
          }
        }
      }
    }
  }
  localStorage.setItem(
    keysvg,
    JSON.stringify({
      svg1: svgarray[0],
      svg2: svgarray[1],
      svg3: svgarray[2],
      svg4: svgarray[3],
      svg5: svgarray[4],
      svg6: svgarray[5],
    })
  );
};

////////////////////////////////////////////////////// Settings Button //////////////////////////////////////////////////////////////////////////////////////////////////////////

// WindowSettings--open

settingsButtonGoal.addEventListener("click", () => {
  windowGoal.classList.add("absolute__windowGoal--open");
  backgroundWindowGoal.classList.add("absolute__backgroundWindowGoal--open");
});

settingsButtonGlass.addEventListener("click", () => {
  windowGlass.classList.add("absolute2__windowGlass--open");
  backgroundWindowGoal.classList.add("absolute__backgroundWindowGoal--open");
});

// Button Cancel

CancelButton.addEventListener("click", () => {
  windowGoal.classList.remove("absolute__windowGoal--open");
  backgroundWindowGoal.classList.remove("absolute__backgroundWindowGoal--open");
});


///////////// TEST //////////////////////////

const animateCSS = (buttonAdd, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(".button--js");

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });